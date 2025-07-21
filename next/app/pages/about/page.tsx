/* About.tsx */
import React from "react";
import dictionary from '@/data/dictionary.json';
import Heading from "@/components/Heading";

interface HeroParaProps {
  content: string;
}

const About: React.FC = () => { 
  return <main className="dark:text-white">
    <Heading Tag="h2" title={dictionary.pages.about.heroHeading} />
    <HeroPara content={dictionary.pages.about.heroPara} />
    <Heading Tag="h3" title={dictionary.pages.about.featuresHeading} />
    <FeaturesPara content={dictionary.pages.about.featuresPara} />
    <FeaturesPara2 content={dictionary.pages.about.featuresPara2} />
    <Heading Tag="h3" title={dictionary.pages.about.featuresRegHeading} />
    <FeaturesRegPara content={dictionary.pages.about.featuresRegPara} />
    <JoinPara content={dictionary.pages.about.joinPara} />
  </main>
};

const HeroPara: React.FC<HeroParaProps> = ({ content }) => <section>{content}</section>;
const FeaturesPara: React.FC<HeroParaProps> = ({ content }) => <section className="mb-2">{content}</section>;
const FeaturesPara2: React.FC<HeroParaProps> = ({ content }) => <section>{content}</section>;
const FeaturesRegPara: React.FC<HeroParaProps> = ({ content }) => <section>{content}</section>;
const JoinPara: React.FC<HeroParaProps> = ({ content }) => <section className="mt-6">{content}</section>;

export default About;