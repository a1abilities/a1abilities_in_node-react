import axios from 'axios';
import * as c from './config/Constants';
import checkError from './config/HttpClient';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: { 'content-type': 'application/json',},  
});

export default {

  submitContact:async ({...payload }) => {

    const URL = `${c.API_CONSUMER}/api/mail/submitContact`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },
};