import { useParams } from 'react-router';
import ArticleAPI from '../../handlers/ArticleAPIHandler';
import DOMPurify from 'dompurify';
import '../../styling/ArticleContent.css';

// const sample = {
//   id: 'test',
//   'raw-title': 'sample-article',
//   title: 'Sample Article',
//   date: '19th December, 2027',
//   authors: ['Bluejet', 'Cora'],
//   description: 'This is a sample, not lorem ipsum.',
//   content: '<p>Stuff stuff stuff<br />Stuff</p>', // Full article page content
//   'image-url': ''
// }

function Article() {
  const params = useParams();
  const article = ArticleAPI.useArticle(params.artRawTitle ? params.artRawTitle : '')!;
  const artData = article.data!;
  // const artData = sample;
  let artHeader = <></>;
  let artBody = <></>;

  if (!article.isFetched) {
    artHeader = <div className='article-header'>
      <h1>Loading...</h1>
    </div>
  }
  else {
    const artContent = artData.content ? DOMPurify.sanitize(artData.content) : 'Loading failed.';

    artHeader = <div className='article-header' style={{backgroundImage: `linear-gradient(to bottom, transparent 33%, black), url('../${artData.imageUrl}')`}}>
        <h1>{artData.title}</h1>
        <h2>{(artData.authors ? 'By ' + artData.authors.join(', ') + ' - ' : '') + artData.date}</h2>
      </div>;

    artBody = <div className='main-content' dangerouslySetInnerHTML={{__html: artContent}}></div>;
  }

  return (
    <>
      {artHeader}
      {artBody}
    </>
  );
}

export default Article;