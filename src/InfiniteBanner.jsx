import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const InfiniteBanner = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/logo1.png' },
    { id: 2, name: 'Sponsor 2', logo: '/logo2.png' },
    { id: 3, name: 'Sponsor 3', logo: '/logo3.png' },
    { id: 4, name: 'Sponsor 4', logo: '/logo4.png' },
    { id: 5, name: 'Sponsor 5', logo: '/logo5.png' },
    // Ajoutez autant de sponsors que nécessaire
  ];

  // Dupliquez les sponsors pour créer un effet de boucle fluide
  const duplicatedSponsors = [...sponsors, ...sponsors];
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    let animationFrameId;
    let position = 0;

    const animate = () => {
      position -= 1; // Vitesse de défilement
      if (position <= -banner.scrollWidth / 2) {
        position = 0;
      }
      banner.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <BannerContainer>
      <BannerContent ref={bannerRef}>
        {duplicatedSponsors.map((sponsor, index) => (
          <SponsorItem key={`${sponsor.id}-${index}`}>
            <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
            <SponsorName>{sponsor.name}</SponsorName>
          </SponsorItem>
        ))}
      </BannerContent>
    </BannerContainer>
  );
};

// Styles avec styled-components
const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  padding: 20px 0;
  margin-top: 50px;
`;

const BannerContent = styled.div`
  display: flex;
  white-space: nowrap;
  will-change: transform;
`;

const SponsorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  min-width: 150px;
`;

const SponsorLogo = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
`;

const SponsorName = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

export default InfiniteBanner;