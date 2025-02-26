import AppLibImg from '@site/static/img/homepage/section_application_libraries.png';
import AppLibImgDark from '@site/static/img/homepage/section_application_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import icons from '@site/src/icons';

const { Identity, SmartContracts, Stronghold } = icons;

interface LanguagesProps {
  languages?: { [key: string]: string };
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => (
  <div className='libraries__cards'>
    <div className='libraries__card libraries__card--wide'>
      <img className='libraries__logo' src='/img/homepage/identity_logo.svg' />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Identity />
          </div>
          <Languages
            languages={{
              Rust: '/identity.rs/getting-started/rust',
              WASM: '/identity.rs/getting-started/wasm',
            }}
          />
        </div>
        <h3 className='libraries__header'>Identity</h3>
        <p className='libraries__feature'>
          The IOTA Identity framework serves as a unifying layer of trust by
          implementing common standards for Decentralized Identity that work
          across various DLTs as well as IOTA-specific methods, catering to
          individuals, organizations, and objects.
        </p>
        <Link
          to='/identity.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Create an identity
        </Link>
      </div>
    </div>
    <div className='spaceholder__card__img'>
      <ThemedImage
        alt='Core Libraries'
        sources={{
          light: AppLibImg,
          dark: AppLibImgDark,
        }}
      />
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Stronghold />
          </div>
          <Languages
            languages={{
              Rust: '/stronghold.rs/reference/overview',
            }}
          />
        </div>
        <h3 className='libraries__header'>Stronghold</h3>
        <p className='libraries__feature'>
          Stronghold is an open-source library designed to securely protect
          digital secrets like IOTA Seeds and private keys, serving as a
          cryptographic database that adheres to best practices without
          revealing sensitive information.
        </p>
        <Link
          to='/stronghold.rs/getting_started'
          className='libraries__button button button--outline button--primary'
        >
          Get to know Stronghold
        </Link>
      </div>
    </div>
    <div className='libraries__card libraries__card--wide'>
      <img
        className='libraries__logo'
        src='/img/homepage/smartcontracts_bot.svg'
      />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <SmartContracts />
          </div>
        </div>
        <h3 className='libraries__header'>IOTA Smart Contracts</h3>
        <p className='libraries__feature'>
          The IOTA Smart Contracts Protocol brings scalable and flexible smart
          contracts into the IOTA ecosystem. With control over gas fees and
          privacy settings, supporting both Rust/Wasm and Solidity/EVM smart
          contracts.
        </p>
        <div className='start-building__buttons'>
          <Link
            to='/wasp-evm/introduction'
            className='start-building__button button button--outline button--primary'
          >
            Learn about ISC
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LibrariesSection;
