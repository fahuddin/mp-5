"use client";
import { useState } from "react";
import createUrl from "@/lib/createUrl";
import styled from "styled-components";

const StyledContainer = styled.main`
  margin: 0 auto;
  padding: 2%;
`;

const StyledTitle = styled.h1`
  font-size: 6%;  
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 8%;
  color: black;
`;

const StyledInput = styled.input`
margin: 1%;
  border: 1px solid;
`;

const StyledButton = styled.button`
  background-color: blue;
  color: white;
`;

const StyledResultText = styled.p`
  margin-top: 1%;
`;

const StyledLinkText = styled.a`
  color: blue;
`;

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  async function shortenLink() {
    setShortUrl("");

    try {
      const result = await createUrl(alias, url);
      const fullLink = window.location.origin + "/" + result.alias;
      setShortUrl(fullLink);
    } catch (err) {
      console.error(err);
  }
}

  return (
    <StyledContainer>
      <StyledTitle>Shortener</StyledTitle> 
      <StyledFormWrapper >
        <StyledLabel>URL</StyledLabel>
        <StyledInput
          type="text"
          placeholder="your url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <StyledLabel>Alias</StyledLabel>
        <StyledInput
          type="text"
          placeholder="your alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />

        <StyledButton onClick={shortenLink}>Shorten</StyledButton>
        </StyledFormWrapper>

       
        <StyledResultText>
          Your short URL: <StyledLinkText href={shortUrl}>{shortUrl}</StyledLinkText>
        </StyledResultText>
  
    </StyledContainer>
  )
}
