import { Header } from '../../components/header/header';
import { Aside } from '../../components/page-blog/aside/aside';
import { Content } from '../../components/page-blog/content/content';
import { Footer } from '../../components/page-blog/footer/footer';

function Blog() {
  return (
    <div className="body-wrapper">
      <Header/>
      <Content/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export {Blog};
