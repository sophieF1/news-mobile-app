import { ArticleType, NewsArticle } from '../types';

class NewsService {

  getArticlesByType(articleType: ArticleType): Promise<NewsArticle[]> {

    return fetch('/data/articles.json')
      .then((response) => {
        return response.json();
      })
      .then((serverArticles) => {
        const newsArticles = serverArticles
          .filter((serverArticle: any) => serverArticle.articleType === articleType)
          .map((serverArticle: any) => {
            return {
              id: serverArticle.id,
              title: serverArticle.title,
              content: serverArticle.content,
              dateString: serverArticle.dateString,
              baseImageName: serverArticle.baseImageName,
              articleType: serverArticle.articleType,
              isFavourite: serverArticle.isFavourite
            } as NewsArticle;
          });

        return newsArticles;
      });
  }

  getFavourites() {
    return fetch('/data/articles.json')
    .then((response) => {
      return response.json();
    })
    .then((favouriteArticles) => {
      const favourites = favouriteArticles
      .filter((favouriteArticle: any) => favouriteArticle.isFavourite === true)
      .map((favouriteArticle: any) => {
        return {
          id: favouriteArticle.id,
          title: favouriteArticle.title,
          content: favouriteArticle.content,
          dateString: favouriteArticle.dateString,
          baseImageName: favouriteArticle.baseImageName,
          articleType: favouriteArticle.articleType,
          isFavourite: favouriteArticle.isFavourite
        } as NewsArticle;
      });
    return favourites;
  });
}
}

export default new NewsService();