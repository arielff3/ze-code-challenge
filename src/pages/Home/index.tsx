import React, { useCallback, useEffect, useState } from 'react';
import Async from 'react-select/async';
import Header from '@components/Header';
import marker from '@assets/icons/marker.png';
import errorCup from '@assets/images/error-cup.png';
import Footer from '@components/Footer';
import arrowLeft from '@assets/icons/arrowLeft.png';
import { ValueType } from 'react-select/src/types';
import { getSuggestLocation } from '@services/getSuggestLocation';
import Modal from '@components/Modal';
import { useLazyQuery } from '@apollo/client';
import ErrorComponent from '@components/ErrorComponent';
import { POC_SEARCH } from '@graphql/queries';
import { useHistory } from 'react-router-dom';
import { Container, InputContainer, ContentModal, Column } from './styles';

interface PocSearchImp {
  pocSearch: {
    id: string;
    address: {
      address1: string;
      number: string;
      city: string;
      province: string;
    };
  }[];
}

const Home: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState({
    suggestions: {
      label: 'Inserir endereço para ver preço',
      value: { lat: 0, lng: 0 },
    },
    isSelected: false,
    error: false,
  });

  useEffect(() => {
    const checkThisLocationExist = (): void => {
      const existId = window.localStorage.getItem('@ZeDelivery: id');
      const existAddress = window.localStorage.getItem('@ZeDelivery: address');
      if (existId && existAddress) {
        history.push('/produtos');
      }
    };
    checkThisLocationExist();
  }, [history]);

  const [getPOC, { loading, error, data }] = useLazyQuery(POC_SEARCH, {
    onCompleted: ({ pocSearch }: PocSearchImp) => {
      if (error) {
        setState({
          error: true,
          isSelected: true,
          suggestions: {
            label: 'Inserir endereço para ver preço',
            value: {
              lat: 0,
              lng: 0,
            },
          },
        });
      }

      if (pocSearch.length === 0) {
        setState({
          error: false,
          isSelected: false,
          suggestions: {
            label: 'Inserir endereço para ver preço',
            value: {
              lat: 0,
              lng: 0,
            },
          },
        });
      }

      if (pocSearch.length > 0) {
        const { id, address } = pocSearch[0];
        window.localStorage.setItem('@ZeDelivery: id', id);
        window.localStorage.setItem(
          '@ZeDelivery: address',
          JSON.stringify(address),
        );
        history.push('/produtos');
      }
    },
  });

  const handleSearchProducts = useCallback(() => {
    getPOC({
      variables: {
        algorithm: 'NEAREST',
        lat: state.suggestions.value.lat.toString(),
        long: state.suggestions.value.lng.toString(),
        now: new Date().toISOString(),
      },
    });
  }, [state.suggestions.value.lng, state.suggestions.value.lat, getPOC]);

  return (
    <Container data-testid="home">
      <Header />
      <section>
        <h1>
          <strong>Bebidas geladas</strong> a <strong>preço </strong>
          de mercado na sua casa
          <strong> agora</strong>
        </h1>
        <InputContainer>
          <img src={marker} alt="marker icon" />
          <Async
            loadOptions={getSuggestLocation}
            cacheOptions
            value={{
              label: state.suggestions.label,
              value: state.suggestions.value,
            }}
            noOptionsMessage={() => 'Nenhuma opção encontrada'}
            loadingMessage={() => 'Buscando...'}
            placeholder="Inserir endereço para ver preço"
            className="select"
            classNamePrefix="select"
            onFocus={() => {
              setState({
                ...state,
                suggestions: {
                  label: 'Inserir endereço para ver preço',
                  value: {
                    lat: 0,
                    lng: 0,
                  },
                },
                isSelected: false,
              });
            }}
            onChange={(
              value: ValueType<
                { value: { lat: number; lng: number }; label: string },
                false
              >,
            ) => {
              setState({
                suggestions: {
                  label: value?.label || '',
                  value: value?.value || { lat: 0, lng: 0 },
                },
                isSelected: true,
                error: false,
              });
            }}
          />
        </InputContainer>
        {data && data.pocSearch.length === 0 && (
          <p>
            Ops, parece que ainda não estamos na sua cidade. Por favor, tente
            outro endereço.
          </p>
        )}
        <Modal open={state.isSelected} loading={loading}>
          {state.error ? (
            <ErrorComponent
              onClick={() => {
                setState({ ...state, isSelected: false, error: false });
              }}
              buttonLabel="Voltar"
              imgSrc={errorCup}
              title="Ops..."
              description="Parece ocorreu algum error, por favor tente novamente mais tarde."
            />
          ) : (
            <ContentModal>
              <Column width={100}>
                <input
                  name="location"
                  readOnly
                  value={state.suggestions.label}
                />
              </Column>
              <section>
                <Column width={30}>
                  <button
                    type="button"
                    className="backButton"
                    onClick={() => setState({ ...state, isSelected: false })}
                  >
                    <img src={arrowLeft} alt="arrowLeft" />
                    Voltar
                  </button>
                </Column>
                <Column width={70}>
                  <button
                    className="viewProductsButton"
                    type="button"
                    disabled={loading}
                    onClick={handleSearchProducts}
                  >
                    ver produtos disponíveis
                  </button>
                </Column>
              </section>
            </ContentModal>
          )}
        </Modal>
      </section>
      <Footer />
    </Container>
  );
};

export default Home;
