// import { ArticleProps } from "../../data/types";
import ArticleAPI from "../../handlers/ArticleAPIHandler";
import DOMPurify from "dompurify";

/*
const artParams: ArticleProps = {
  id: 'cc7282b3-aa98-40ff-b034-df3c2c071a99',
  title: 'Test Title',
  description: 'A rough summary of the article',
  // imageUrl: 'img.jpg',
  link: 'article', // Relative path
  content: "<p>\
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ac elit ut ultricies. Praesent convallis, dui pulvinar elementum pellentesque, turpis neque aliquam tortor, sit amet sodales risus quam in felis. Nullam nibh massa, pulvinar ac varius id, fermentum ut velit. Praesent condimentum leo ut mauris pretium, sodales semper dolor lobortis. Sed gravida finibus eleifend. Sed congue turpis sit amet lacinia gravida. Nunc varius hendrerit tellus, sed pellentesque massa feugiat in. Duis iaculis sed est et tempus. Cras et ultrices nibh. Nullam pharetra varius pulvinar. Maecenas id est non ipsum ornare malesuada. Maecenas quis lacus sit amet nulla tempor condimentum a sed sapien. Quisque orci ligula, mollis sed elementum quis, dignissim a quam. Donec quis fringilla metus. Maecenas in feugiat enim, sed venenatis quam.\
      <br /><br />\
      Proin vehicula imperdiet lectus vitae vestibulum. Fusce egestas viverra dui non tincidunt. Sed facilisis lacus ut ante rhoncus, id vestibulum felis fringilla. Sed iaculis dui ac ex sollicitudin, vel dignissim est vestibulum. Donec eget magna nulla. Curabitur cursus nunc id vehicula suscipit. Suspendisse mollis molestie velit, vitae viverra leo feugiat in. Fusce fermentum nibh et sodales consequat. Nam ipsum ligula, finibus nec nibh id, fringilla pulvinar lectus. Vestibulum ac metus risus. Fusce gravida porta sagittis.\
      <br /><br />\
      Duis ac rhoncus nulla. Aliquam fringilla non nisi id fermentum. Sed ullamcorper augue et lacus vestibulum, nec pellentesque turpis semper. In a facilisis nisl, ac suscipit purus. Quisque venenatis massa sollicitudin pharetra dapibus. Nulla auctor efficitur nulla, sit amet tempus nibh sagittis eu. Ut auctor tempus urna, nec lobortis urna faucibus ac. Vestibulum id massa id massa consequat aliquam. Nulla condimentum fringilla diam, sit amet porta sem.\
      <br /><br />\
      Praesent non orci dictum, faucibus ligula ac, vulputate sem. Pellentesque ullamcorper placerat sem, in efficitur arcu interdum tristique. In ac velit vitae turpis placerat finibus. Quisque ullamcorper metus et mauris accumsan, ut malesuada dui accumsan. Nunc turpis augue, lobortis quis justo et, vulputate tempor diam. Nunc nec felis id turpis egestas auctor ac sed felis. Mauris auctor nibh nec dolor volutpat faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pretium tortor eget mollis aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eget ligula ultricies, laoreet quam at, consequat diam. Ut volutpat ex sed ex dictum vehicula. Fusce ut dolor justo. Nulla eget dapibus lectus. Mauris semper bibendum dictum. Fusce at condimentum nisl.\
      <br /><br />\
      Morbi vitae dolor interdum, euismod massa non, molestie ex. Curabitur interdum, dolor eget congue mattis, ante lacus pulvinar eros, vel malesuada purus metus quis nulla. Sed venenatis purus eget interdum auctor. Nunc imperdiet dolor eros, non vulputate magna pulvinar in. Quisque aliquam, elit ut pharetra iaculis, nunc enim accumsan dui, ac hendrerit libero leo at turpis. Morbi rutrum porttitor mauris at interdum. Nunc a mi posuere, porttitor sem vitae, iaculis leo. Maecenas accumsan, eros quis scelerisque suscipit, elit ligula pretium neque, in tincidunt massa neque at enim. Phasellus quis dui massa. Etiam ut lorem sed mauris sagittis tincidunt. Curabitur eget urna volutpat, fermentum ex aliquam, ultricies ex. In ut dapibus mauris.\
    </p>" // Full article page content
};
*/

function Article() {
  const article = ArticleAPI.useArticle('cc7282b3-aa98-40ff-b034-df3c2c071a99');

  const artContent = article.data?.content ? DOMPurify.sanitize(article.data?.content) : 'Loading failed.';

  return (<div className="main-content" dangerouslySetInnerHTML={{__html: artContent}}></div>);
}

export default Article;