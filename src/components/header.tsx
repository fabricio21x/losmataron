import React from "react";
import {
  Inline,
  Color,
  Text,
  TextWeight,
  noop,
  TextSize,
  TextLeading,
  Touchable,
  Icon,
  Frame,
} from "@ableco/baseline";
import { Share } from "../components/icons";
import { Link } from "react-scroll";

export default function Header({ shareId }: { shareId: string }) {
  return (
    <Frame
      p={[0, 0, 0, 6]}
      bg={Color.Black}
      className="fixed z-20 w-full max-w-screen-xl flex flex-col sm:flex-row justify-between items-center"
    >
      <Text
        italic
        color={Color.White}
        weight={TextWeight.Light}
        size={TextSize.XL6}
        leading={TextLeading.Snug}
      >
        #14N
      </Text>
      <Text
        color={Color.White}
        weight={TextWeight.ExtraBold}
        size={TextSize.XL6}
        leading={TextLeading.Snug}
      >
        LOS MATARON
      </Text>
      <Link to={shareId} spy={true} smooth={true} offset={-85} duration={1500}>
        <Touchable className="flex h-full w-48" bg={Color.White} onClick={noop}>
          <Inline p={[2, 5]} space={4}>
            <Text
              size={TextSize.LG}
              color={Color.Black}
              weight={TextWeight.SemiBold}
            >
              Comparte para que el mundo se entere
            </Text>
            <Icon color={Color.Black}>
              <Share width={50} height={44} />
            </Icon>
          </Inline>
        </Touchable>
      </Link>
    </Frame>
  );
}
