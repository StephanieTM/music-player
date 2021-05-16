import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';

const toast = createStandaloneToast();

export function configAxios() {
  axios.interceptors.response.use(response => {
    return response.data;
  }, error => {
    if (error.response.config.headers.silent !== true) {
      if (error.response.status === 404) {
        toast({
          title: `${error.response.status}, ${error.response.config.url} not found.`,
          status: "error",
          duration: 5000,
          isClosable: false,
        });
      } else {
        toast({
          title: error.response.data.message || error.response.data.error || error.response.data,
          status: "error",
          duration: 5000,
          isClosable: false,
        });
      }
    }
  
    return Promise.reject(error);
  });
}
