import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { translateMessageId } from "../../utils/translations"
import PageMetadata from "../../components/PageMetadata"
import Translation from "../../components/Translation"
import ButtonLink from "../../components/ButtonLink"
import ProductCard from "../../components/ProductCard"
import InfoBanner from "../../components/InfoBanner"
import CalloutBanner from "../../components/CalloutBanner"
import {
  Content,
  CardGrid,
  Page,
} from "../../components/SharedStyledComponents"

const StyledPage = styled(Page)`
  margin-top: 4rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 896px;
  padding: 0 2rem;
`
const H1 = styled.h1`
  margin: 2rem 0 0;
  margin-top: 0;
  color: ${(props) => props.theme.colors.text};
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.monospace};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.4;
  text-align: center;
`

const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text300};
  max-width: 55ch;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`

const SubtitleTwo = styled(Subtitle)`
  margin-top: 0rem;
`

const StackContainer = styled(Content)`
  border: 1px solid ${(props) => props.theme.colors.border};
  justify-content: flex-start;
  border-radius: 4px;
  padding: 3rem 2rem;
  margin: 2rem;
  width: 96%;
  background: ${(props) => props.theme.colors.ednBackground};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
    margin-left: 0rem;
    margin-right: 0rem;
    border-radius: 0px;
  }
`

const StyledCardGrid = styled(CardGrid)`
  margin-bottom: 2rem;
`

const LearningToolsPage = ({ data }) => {
  const intl = useIntl()

  const sandboxes = [
    {
      name: "Remix",
      description: "page-learning-tools-remix-description",
      url: "https://remix.ethereum.org",
      image: data.remix.childImageSharp.fixed,
      alt: "page-learning-tools-remix-logo-alt",
      background: "#5098D6",
      subjects: ["Solidity", "Vyper"],
    },
    {
      name: "Eth.build",
      description: "page-learning-tools-eth-dot-build-description",
      url: "https://eth.build/",
      image: data.ethdotbuild.childImageSharp.fixed,
      alt: "page-learning-tools-eth-dot-build-logo-alt",
      background: "#000000",
      subjects: ["web3"],
    },
  ]

  const games = [
    {
      name: "CryptoZombies",
      description: "page-learning-tools-cryptozombies-description",
      url: "https://cryptozombies.io/en/solidity",
      image: data.cryptoZombie.childImageSharp.fixed,
      alt: "page-learning-tools-cryptozombies-logo-alt",
      background: "#2B2F48",
      subjects: ["Solidity"],
    },
    {
      name: "Ethernauts",
      description: "page-learning-tools-ethernauts-description",
      url: "https://ethernaut.openzeppelin.com/",
      image: data.oz.childImageSharp.fixed,
      alt: "page-learning-tools-ethernauts-logo-alt",
      background: "#4F62DC",
      subjects: ["Solidity"],
    },
    {
      name: "Vyper.fun",
      description: "page-learning-tools-vyperfun-description",
      url: "https://vyper.fun",
      image: data.vyperfun.childImageSharp.fixed,
      alt: "page-learning-tools-vyperfun-logo-alt",
      background: "#ffffff",
      subjects: ["Vyper"],
    },
    {
      name: "Capture The Ether",
      description: "page-learning-tools-capture-the-ether-description",
      url: "https://capturetheether.com/",
      image: data.captureTheEther.childImageSharp.fixed,
      alt: "page-learning-tools-capture-the-ether-logo-alt",
      background: "#1B9AAA",
      subjects: ["Solidity"],
    },
  ]

  const bootcamps = [
    {
      name: "ChainShot",
      description: "page-learning-tools-chainshot-description",
      url: "https://www.chainshot.com",
      image: data.chainshot.childImageSharp.fixed,
      alt: "page-learning-tools-chainshot-logo-alt",
      background: "#111F29",
      subjects: ["Solidity", "Vyper", "web3"],
    },
    {
      name: "ConsenSys Academy",
      description: "page-learning-tools-consensys-academy-description",
      url: "https://consensys.net/academy/bootcamp/",
      image: data.consensys.childImageSharp.fixed,
      alt: "page-learning-tools-consensys-academy-logo-alt",
      background: "#F6F7F9",
      subjects: ["Solidity", "web3"],
    },
    {
      name: "BloomTech",
      description: "page-learning-tools-bloomtech-description",
      url: "https://www.bloomtech.com/courses/web3",
      image: data.bloomtech.childImageSharp.fixed,
      alt: "page-learning-tools-bloomtech-logo-alt",
      background: "#FFFFFF",
      subjects: ["Solidity", "web3"],
    },
    {
      name: "_buildspace",
      description: "page-learning-tools-buildspace-description",
      url: "https://buildspace.so",
      image: data.buildspace.childImageSharp.fixed,
      alt: "page-learning-tools-buildspace-logo-alt",
      background: "#F6F7F9",
      subjects: ["Solidity", "web3"],
    },
    {
      name: "Questbook",
      description: "page-learning-tools-questbook-description",
      url: "https://questbook.app/",
      image: data.questbook.childImageSharp.fixed,
      alt: "page-learning-tools-questbook-logo-alt",
      background: "#141236",
      subjects: ["Solidity", "web3"],
    },
    {
      name: "NFT School",
      description: "page-learning-tools-nftschool-description",
      url: "https://nftschool.dev/",
      image: data.nftschool.childImageSharp.fixed,
      alt: "page-learning-tools-nftschool-logo-alt",
      background: "#111F29",
      subjects: ["Solidity", "web3"],
    },
  ]

  return (
    <StyledPage>
      <PageMetadata
        title={translateMessageId("page-learning-tools-meta-title", intl)}
        description={translateMessageId("page-learning-tools-meta-desc", intl)}
      />
      <Header>
        <H1>
          <Translation id="page-learning-tools-coding" />
        </H1>
        <Subtitle>
          <Translation id="page-learning-tools-coding-subtitle" />
        </Subtitle>
      </Header>
      <StackContainer>
        <SubtitleTwo>
          <Translation id="page-learning-tools-sandbox" />
        </SubtitleTwo>
        <p>
          <Translation id="page-learning-tools-sandbox-desc" />
        </p>
        <StyledCardGrid>
          {sandboxes.map((sandbox, idx) => (
            <ProductCard
              key={idx}
              background={sandbox.background}
              url={sandbox.url}
              alt={translateMessageId(sandbox.alt, intl)}
              image={sandbox.image}
              name={sandbox.name}
              subjects={sandbox.subjects}
            >
              <Translation id={sandbox.description} />
            </ProductCard>
          ))}
        </StyledCardGrid>
        <InfoBanner emoji=":point_up:" shouldCenter={true}>
          <Translation id="page-learning-tools-remix-description-2" />
        </InfoBanner>
      </StackContainer>
      <StackContainer>
        <SubtitleTwo>
          <Translation id="page-learning-tools-game-tutorials" />
        </SubtitleTwo>
        <p>
          <Translation id="page-learning-tools-game-tutorials-desc" />
        </p>
        <StyledCardGrid>
          {games.map((game, idx) => (
            <ProductCard
              key={idx}
              background={game.background}
              url={game.url}
              alt={translateMessageId(game.alt, intl)}
              image={game.image}
              name={game.name}
              subjects={game.subjects}
            >
              <Translation id={game.description} />
            </ProductCard>
          ))}
        </StyledCardGrid>
      </StackContainer>
      <StackContainer>
        <SubtitleTwo>
          <Translation id="page-learning-tools-bootcamps" />
        </SubtitleTwo>
        <p>
          <Translation id="page-learning-tools-bootcamps-desc" />
        </p>
        <StyledCardGrid>
          {bootcamps.map((bootcamp, idx) => (
            <ProductCard
              key={idx}
              url={bootcamp.url}
              background={bootcamp.background}
              alt={translateMessageId(bootcamp.alt, intl)}
              image={bootcamp.image}
              name={bootcamp.name}
              subjects={bootcamp.subjects}
            >
              <Translation id={bootcamp.description} />
            </ProductCard>
          ))}
        </StyledCardGrid>
      </StackContainer>
      <Content>
        <CalloutBanner
          image={data.learn.childImageSharp.fluid}
          alt={translateMessageId(
            "page-index-sections-enterprise-image-alt",
            intl
          )}
          title={translateMessageId("page-learning-tools-documentation", intl)}
          description={translateMessageId(
            "page-learning-tools-documentation-desc",
            intl
          )}
        >
          <div>
            <ButtonLink to="/developers/docs/">
              <Translation id="page-learning-tools-browse-docs" />
            </ButtonLink>
          </div>
        </CalloutBanner>
      </Content>
    </StyledPage>
  )
}

export default LearningToolsPage

export const learningToolImage = graphql`
  fragment learningToolImage on File {
    childImageSharp {
      fixed(height: 100, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    captureTheEther: file(
      relativePath: { eq: "dev-tools/capturetheether.png" }
    ) {
      ...learningToolImage
    }
    chainshot: file(relativePath: { eq: "dev-tools/chainshot.png" }) {
      ...learningToolImage
    }
    consensys: file(relativePath: { eq: "dev-tools/consensys.png" }) {
      ...learningToolImage
    }
    bloomtech: file(relativePath: { eq: "dev-tools/bloomtech.png" }) {
      ...learningToolImage
    }
    buildspace: file(relativePath: { eq: "dev-tools/buildspace.png" }) {
      ...learningToolImage
    }
    cryptoZombie: file(relativePath: { eq: "dev-tools/crypto-zombie.png" }) {
      ...learningToolImage
    }
    oz: file(relativePath: { eq: "dev-tools/oz.png" }) {
      ...learningToolImage
    }
    vyperfun: file(relativePath: { eq: "dev-tools/vyperfun.png" }) {
      ...learningToolImage
    }
    questbook: file(relativePath: { eq: "dev-tools/questbook.png" }) {
      ...learningToolImage
    }
    remix: file(relativePath: { eq: "dev-tools/remix.png" }) {
      ...learningToolImage
    }
    ethdotbuild: file(relativePath: { eq: "dev-tools/eth-dot-build.png" }) {
      ...learningToolImage
    }
    nftschool: file(relativePath: { eq: "dev-tools/nftschool.png" }) {
      ...learningToolImage
    }
    learn: file(relativePath: { eq: "enterprise-eth.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
