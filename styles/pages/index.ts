import styled from 'styled-components';
import {fullSpacedMixin} from 'styles/mixins';

const masonrySpace = 30;

const ImageGrid = styled.div`
  .masonry-grid {
    display: flex;
    margin-left: -${masonrySpace}px; /* gutter size offset */
    width: auto;
  }

  .masonry-grid-column {
    padding-left: ${masonrySpace}px; /* gutter size */
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    margin-bottom: ${masonrySpace}px;
  }

  a {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: 2rem;
    will-change: transform;
    overflow: hidden;
    transition: transform 0.5s;
    z-index: 1;

    .title-container {
      position: absolute;
      top: 50%;
      right: 0;
      width: 100%;
      height: 50px;
      overflow: hidden;
      transform: translateY(-50%);
      z-index: 2;

      .image-title {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.25s ${({theme}) => theme?.animation?.swoop};
      }
    }

    img {
      transform: scale(1);
      transition: 0.575s ${({theme}) => theme?.animation?.swoop};
    }

    &:after {
      content: '';
      position: absolute;
      ${fullSpacedMixin};
      background: ${({theme}) => theme?.colors?.white};
      opacity: 0;
      z-index: 0;
    }

    &:hover {
      .image-title {
        top: 0;
      }

      img {
        transform: scale(1.03);
      }

      &:after {
        opacity: 0.8;
        transition: 0.475s ${({theme}) => theme?.animation?.swoop};
      }
    }
  }
`;

export {ImageGrid};
