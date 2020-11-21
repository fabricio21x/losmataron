import React, { useCallback, useRef } from "react";
import {
  Stack,
  Inline,
  Frame,
  Color,
  Text,
  TextWeight,
  Button,
  noop,
  TextSize,
  TextLeading,
  Touchable,
  Icon,
  Image,
  Inset,
  Center,
  Flex,
  TextDecoration,
} from "@ableco/baseline";
import { Link } from "react-scroll";
import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { getImageUrl } from "../utils/utils";
import {
  partidosPoliticos,
  lideresPoliticos,
  congresistas,
  periodistas,
} from "../static/data";

import Header from "../components/header";

function ImageFrameTitle({
  imgUrl,
  title,
  subTitle,
}: {
  imgUrl: string;
  title: string;
  subTitle: string;
}) {
  return (
    <Stack
      style={{ width: 300 }}
      space={5}
      className="text-left mb-12 mr-12 md:mx-0"
    >
      <Image source={getImageUrl(imgUrl)} loading="eager" alt={title} />
      <Stack p={[0, 2]} space={2}>
        <Text size={TextSize.XL2} color={Color.White} weight={TextWeight.Bold}>
          {title}
        </Text>
        <Text size={TextSize.SM} color={Color.White} weight={TextWeight.Normal}>
          {subTitle}
        </Text>
      </Stack>
    </Stack>
  );
}

function MidSection({ id }: { id: string }) {
  return (
    <Stack space={40} id={id} className="w-full px-28 py-20">
      <Stack space={12} className="text-center">
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL6}
          leading={TextLeading.Snug}
        >
          MANUEL MERINO DE LAMA
        </Text>
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL6}
          leading={TextLeading.Snug}
        >
          ÁNTERO FLORES-ARÁOZ
        </Text>
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL6}
          leading={TextLeading.Snug}
        >
          GASTÓN RODRÍGUEZ
        </Text>
      </Stack>
      <Stack space={24} className="text-center">
        <Center>
          <Text
            color={Color.White}
            weight={TextWeight.ExtraBold}
            size={TextSize.XL5}
            leading={TextLeading.Snug}
          >
            JEFES POLICIALES
          </Text>
        </Center>
        <Flex
          p={[8, 0]}
          className="w-full flex-col lg:flex-wrap lg:flex-row justify-between items-center"
        >
          <ImageFrameTitle
            imgUrl="jefePol1.png"
            title="ORLANDO VELASCO MUJICA"
            subTitle="General de la Policía - Comandante General de la Policía
            Nacional del Perú"
          />
          <ImageFrameTitle
            imgUrl="jefePol2.png"
            title="JORGE ALEJANDRO LAM ALMONTE"
            subTitle="Teniente General PNP - Sub Comandante General de la Policía Nacional del Perú"
          />
          <ImageFrameTitle
            imgUrl="jefePol3.png"
            title="HERLY WILLIAM ROJAS LIENDO"
            subTitle="Teniente General PNP - Inspector General de la Policía Nacional del Perú"
          />
        </Flex>
      </Stack>
    </Stack>
  );
}

function ImageWithText({
  imageUrl,
  name,
  imageWidth,
  imageHeight,
  textColor = Color.Black,
}: {
  imageUrl: string;
  name: string;
  imageWidth: number;
  imageHeight: number;
  textColor?: Color;
}) {
  return (
    <Stack
      style={{ width: imageWidth }}
      space={5}
      className="text-cente mr-20 mb-12 md:mb-4 lg:mr-0"
    >
      <Image
        style={{ width: imageWidth, height: imageHeight }}
        source={getImageUrl(imageUrl)}
        alt={name}
      />
      <Text
        size={TextSize.XL2}
        color={textColor}
        weight={TextWeight.Bold}
        leading={TextLeading.Snug}
      >
        {name}
      </Text>
    </Stack>
  );
}

function PoliticParties() {
  return (
    <Stack className="px-28 py-16" bg={Color.White} space={20}>
      <Center>
        <Text
          color={Color.Black}
          size={TextSize.XL5}
          weight={TextWeight.ExtraBold}
        >
          PARTIDOS POLÍTICOS
        </Text>
      </Center>
      <Flex className="flex-col items-center justify-between md:flex-row md:flex-wrap md:items-start">
        {partidosPoliticos[0].map((pp, idx) => (
          <ImageWithText
            key={`pp_${idx}`}
            imageUrl={pp.url}
            name={pp.name}
            imageWidth={190}
            imageHeight={190}
          />
        ))}
      </Flex>
      <Flex className="flex-col items-center justify-between md:flex-row md:flex-wrap md:items-start">
        {partidosPoliticos[1].map((pp, idx) => (
          <ImageWithText
            key={`pp_${idx}`}
            imageUrl={pp.url}
            name={pp.name}
            imageWidth={190}
            imageHeight={190}
          />
        ))}
      </Flex>
    </Stack>
  );
}

type Congresista = {
  name: string;
  highlight: boolean;
};

function NamesList({ source }: { source: Congresista[] }) {
  return (
    <Stack className="text-center">
      {source.map((item, idx) => (
        <Text
          key={`c_${idx}`}
          color={Color.White}
          size={item.highlight ? TextSize.XL2 : TextSize.LG}
          weight={item.highlight ? TextWeight.ExtraBold : TextWeight.SemiBold}
          leading={TextLeading.Loose}
        >
          {item.name}
        </Text>
      ))}
    </Stack>
  );
}

function TextStack({ source }: { source: string[] }) {
  return (
    <Stack space={20} className="text-center mb-20 lg:mb-0">
      {source.map((p, idx) => (
        <Text
          key={`pp_${idx}`}
          color={Color.White}
          size={TextSize.XL3}
          weight={TextWeight.Bold}
        >
          {p}
        </Text>
      ))}
    </Stack>
  );
}

function Representants() {
  return (
    <Stack className="px-28 py-16" space={16}>
      <Inline>
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL4}
          leading={TextLeading.Snug}
        >
          LÍDERES POLÍTICOS
        </Text>
      </Inline>
      <Flex className="flex-col items-center justify-between md:flex-row md:flex-wrap md:items-start">
        {lideresPoliticos.slice(0, 5).map((pp, idx) => (
          <ImageWithText
            key={`pl_${idx}`}
            imageUrl={pp.url}
            name={pp.name}
            imageWidth={179}
            imageHeight={224}
            textColor={Color.White}
          />
        ))}
      </Flex>
      <Flex className="flex-col items-center justify-between md:flex-row md:flex-wrap md:items-start">
        {lideresPoliticos.slice(5).map((pp, idx) => (
          <ImageWithText
            key={`pl_${idx}`}
            imageUrl={pp.url}
            name={pp.name}
            imageWidth={179}
            imageHeight={224}
            textColor={Color.White}
          />
        ))}
      </Flex>
      <Inline>
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL4}
          leading={TextLeading.Snug}
        >
          105 CONGRESISTAS
        </Text>
      </Inline>
      <Flex className="flex-col items-center justify-between md:flex-row md:flex-wrap md:items-start">
        {congresistas.map((lst, idx) => (
          <NamesList key={`c_${idx}`} source={lst} />
        ))}
      </Flex>
      <Inline>
        <Text
          color={Color.White}
          weight={TextWeight.ExtraBold}
          size={TextSize.XL4}
          leading={TextLeading.Snug}
        >
          PERIODISTAS
        </Text>
      </Inline>
      <Flex className="flex-col items-center justify-between lg:flex-row md:flex-wrap lg:items-start lg:pl-14 lg:pb-20">
        {periodistas.map((lst, idx) => (
          <TextStack key={`p_${idx}`} source={lst} />
        ))}
      </Flex>
    </Stack>
  );
}

export function Footer({ id }: { id: string }) {
  return (
    <Frame id={id} className="relative w-full">
      <Image source={getImageUrl("footer.jpg")} alt="Footer" />
      <Inset
        variant="absolute"
        bg={Color.Black}
        className="bg-opacity-50 text-center flex justify-center"
      >
        <Stack className="items-center justify-center">
          <Text
            color={Color.White}
            weight={TextWeight.Bold}
            size={TextSize.XL3}
            leading={TextLeading.Snug}
          >
            #SeMetieronConLaGeneracionEquivocada
          </Text>
          <Text
            color={Color.White}
            weight={TextWeight.Bold}
            size={TextSize.XL3}
            leading={TextLeading.Snug}
          >
            #YoProtestoContraLaViolencia
          </Text>
          <Text
            color={Color.White}
            weight={TextWeight.Bold}
            size={TextSize.XL3}
            leading={TextLeading.Snug}
          >
            #GeneracionDelBicentenario
          </Text>
          <Stack className="self mt-12" space={4}>
            <Text
              color={Color.White}
              weight={TextWeight.Bold}
              size={TextSize.XL}
              leading={TextLeading.Snug}
              decoration={TextDecoration.Underline}
            >
              Comparte para que el mundo se entere
            </Text>
            <Inline className="justify-center items-center" space={6}>
              <FacebookShareButton
                url="https://losmataron.pe"
                quote="Una página para hacer memoria"
                hashtag="#LosMataron"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://losmataron.pe"
                title="Los Mataron"
                hashtags={["#LosMataron"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </Inline>
          </Stack>
        </Stack>
      </Inset>
    </Frame>
  );
}

export default function Home() {
  return (
    <Frame bg={Color.Black}>
      <Stack className="mx-auto max-w-screen-xl font-sans">
        <Header shareId="footer" />
        <Stack style={{ height: 720 }} className="relative">
          <Image
            style={{ height: 720 }}
            source={getImageUrl("portada1.png")}
            loading="eager"
            alt="portada"
            content="cover"
          />
          <Inset variant="absolute">
            <Stack
              style={{ marginLeft: "12%" }}
              className="mt-56 max-w-3xl"
              space={12}
            >
              <Text
                italic
                color={Color.White}
                size={TextSize.XL4}
                weight={TextWeight.SemiBold}
                leading={TextLeading.Tight}
              >
                El 14 de noviembre del 2020, el Gobierno del Perú mató a 2
                compatriotas jóvenes que luchaban por nuestros derechos durante
                las manifestaciones...
              </Text>
              <Text
                italic
                color={Color.White}
                size={TextSize.XL4}
                weight={TextWeight.SemiBold}
                leading={TextLeading.Tight}
              >
                dejando además cientos de heridos y desaparecidos...
              </Text>
            </Stack>
            <Center className="mt-12">
              <Link
                to="content1"
                spy={true}
                smooth={true}
                offset={-85}
                duration={1500}
              >
                <Touchable onClick={noop}>
                  <Text
                    color={Color.White}
                    size={TextSize.XL5}
                    weight={TextWeight.SemiBold}
                    leading={TextLeading.Tight}
                  >
                    Estos son los culpables ↓
                  </Text>
                </Touchable>
              </Link>
            </Center>
          </Inset>
        </Stack>
        <MidSection id="content1" />
        <PoliticParties />
        <Representants />
        <Footer id="footer" />
      </Stack>
    </Frame>
  );
}
