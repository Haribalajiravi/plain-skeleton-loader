import * as React from 'react';
import './style.css';
import SkeletonLoader from './loader';
import Header from './header';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [catData, setCatData] = React.useState({});
  const [gridData, setGridData] = React.useState({});

  // To simulate API, just used setTimeout to hold the data
  setTimeout(() => {
    setCatData({
      title: 'Cute Cat',
      desc: `
      If you have a cat, there’s a good chance your camera roll is already full of photos of your furry feline. But that doesn’t mean there’s no room for a few more. And just like cat photos, there’s also always room for a cat quote or two. There’s an endless amount of reasons that you might need this complete guide on cat quotes. Maybe you’ve taken dozens of photos of your furry best friend and you’re looking for that perfect Instagram caption.
      `,
      src: 'https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg',
    });

    setGridData({
      g1: 'Grid 1',
      g2: 'Grid 2',
      g3: 'Grid 3',
      g4: 'Grid 4',
      g5: 'Grid 5',
    });

    setLoading(false);
  }, 3000);

  // Wrapping the children on Skeleton Loader
  return (
    <div>
      <SkeletonLoader isLoading={loading}>
        <Header title="Section 1" />
        <h2 className="cat-title">{catData.title}</h2>
        <img src={catData.src} width="100" height="100" />
        <p>{catData.desc}</p>
      </SkeletonLoader>

      <Header title="Section 2" />
      <div className="container">
        <SkeletonLoader isLoading={loading}>
          <div className="grid-cell-1">{gridData.g1}</div>
          <div className="grid-cell-2">{gridData.g2}</div>
          <div className="grid-cell-3">{gridData.g3}</div>
          <div className="grid-cell-4">{gridData.g4}</div>
          <div className="grid-cell-5">{gridData.g5}</div>
        </SkeletonLoader>
      </div>
    </div>
  );
}
