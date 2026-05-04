import { TitleSearchTerm } from '../types/TitleSearchTerm';

/**
 * Set up search terms in an array so the
 * Strapi filter can use them in an $and or $or search
 *
 * @param term string
 * @returns Array<TitleSearchTerm>
 */
export function setUpSearchTermArray(term: string) {
  const terms = term.split('%20');
  const searchTermsArray: Array<TitleSearchTerm> = [];
  terms.forEach((param) => {
    searchTermsArray.push({
      title: {
        $containsi: param,
      },
    });
  });
  return searchTermsArray;
}
