import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Icon } from '../../components/Icon';
import { Label } from '../../components/Label';
import { DTOLoja } from '../../dtos/loja';
import colors from '../../styles/colors';
import { FONTS, SIZES } from '../../styles/fonts';

import { Container, Image, Info, Rating, SubHeader, Wrap } from './styles';

interface LojaProps {
  item: DTOLoja;
}

const styles = StyleSheet.create({
  locationIcon: {
    name: 'map-pin',
    color: colors.pink_red,
  },
  phoneIcon: {
    name: 'phone',
    color: colors.pink_red,
  },
  buttonStyle: {
    marginTop: 24,
    backgroundColor: colors.greys.very_light,
  },
  ratingIcon: {
    name: 'star',
    color: colors.light_brown,
  },
  textDescriptionStyle: {
    color: colors.greys.medium,
    fontFamily: FONTS.MANROPE_SEMI_BOLD,
  },
  textAboutStyle: {
    color: colors.greys.medium,
    fontFamily: FONTS.MANROPE_MEDIUM,
    fontFontsize: SIZES.SMALL,
    textAlign: 'left',
  },
});

export function Store() {
  const routes = useRoute();

  const { item }: LojaProps = routes.params as LojaProps;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header title="Buscar" />

        <Image
          source={{
            uri: item.img,
          }}
        />

        <SubHeader>
          <Wrap>
            <Label bigLabel text={item?.nome} />
            <Label text={item?.descricao} style={styles.textDescriptionStyle} />
          </Wrap>

          <Rating>
            <Label text={item?.avaliacao.toFixed(1).toString()} />
            <Icon
              name={styles.ratingIcon.name}
              color={styles.ratingIcon.color}
              iconButton
            />
          </Rating>
        </SubHeader>

        <Button
          text="Rua panamá, Setor Ponta Sul"
          buttonStyle={styles.buttonStyle}
          icon={styles.locationIcon}
        />

        <Button
          text="+55 (62) 9 1234-5678"
          buttonStyle={styles.buttonStyle}
          icon={styles.phoneIcon}
        />

        <Button
          text={item.sobre}
          buttonStyle={[styles.buttonStyle, { height: 130 }]}
          textStyle={[styles.textAboutStyle, { padding: 16 }]}
        />
      </Container>
    </ScrollView>
  );
}
