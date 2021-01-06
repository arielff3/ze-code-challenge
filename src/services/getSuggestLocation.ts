import api from '@services/api';
import debounce from 'debounce-promise';

const loadSuggestions = async (
  inputValue: string,
): Promise<{ value: string; label: string }[]> => {
  const KEY = process.env.MAPKEY || '';
  const request = await api.get(
    `address?key=${KEY}&Results=5&location=${inputValue},BR`,
  );
  const response = request.data.results[0].locations.filter(
    (location: { adminArea1: string }) => location.adminArea1 === 'BR',
  );
  return response.map(
    (address: {
      street: string;
      postalCode: string;
      adminArea5: string;
      adminArea3: string;
      adminArea1: string;
      latLng: {
        lat: number;
        lng: number;
      };
    }) => {
      const {
        street,
        adminArea1: countrieName,
        adminArea3: stateName,
        adminArea5: cityName,
        postalCode,
        latLng: { lat, lng },
      } = address;
      return {
        // eslint-disable-next-line prettier/prettier
        label:
          `${street && `Longradouro: ${street}, `}${cityName && `Cidade: ${cityName}, `}${stateName && countrieName &&`Estado/País: ${stateName}/${countrieName}`}${postalCode && ` - Cep: ${postalCode}`}`,
        value: { lat, lng },
      };
    },
  );
};

const loadOptions = (inputValue: string) => loadSuggestions(inputValue);

export const getSuggestLocation = debounce(loadOptions, 2000, {
  leading: true,
});
