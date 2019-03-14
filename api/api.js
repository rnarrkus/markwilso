import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../config';

const getPostsAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);

    const response = await API.query(
      Prismic.Predicates.at('document.type', 'post'),
      {
        orderings: '[my.post.date desc]',
        ...params
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getPostAPI = async slug => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);

    const response = await API.query(
      Prismic.Predicates.at('my.post.uid', slug)
    );
    return response.results[0];
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getSideProjectsAPI = async params => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);

    const response = await API.query(
      Prismic.Predicates.at('document.type', 'side_project'),
      {
        orderings: '[my.side_project.order]',
        ...params
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getSideProjectAPI = async slug => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);

    const response = await API.query(
      Prismic.Predicates.at('my.side_project.uid', slug)
    );
    return response.results[0];
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getResumeAPI = async () => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);

    const response = await API.query(
      Prismic.Predicates.at('document.type', 'resume'),
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getPostsAPI, getPostAPI, getSideProjectsAPI, getSideProjectAPI, getResumeAPI };
