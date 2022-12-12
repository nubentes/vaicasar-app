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

import { Container, Image, Rating, SubHeader, Wrap } from './styles';

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
    justifyContent: 'flex-start',
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

export function StoreDetails() {
  const routes = useRoute();

  const { item }: LojaProps = routes.params as LojaProps;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header title="Buscar" />

        <Image
          source={{
            uri: item?.urlFotoPerfil,
          }}
        />

        <SubHeader>
          <Wrap>
            <Label bigLabel text={item?.nome} />
            <Label text={item?.telefone} style={styles.textDescriptionStyle} />
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
          text={`${item?.endereco?.rua}`}
          buttonStyle={styles.buttonStyle}
          icon={styles.locationIcon}
        />

        <Button
          text={item?.telefone}
          buttonStyle={styles.buttonStyle}
          icon={styles.phoneIcon}
        />

        <Button
          text={item?.descricao}
          buttonStyle={[styles.buttonStyle, { height: 130 }]}
          textStyle={[styles.textAboutStyle, { padding: 16 }]}
        />
      </Container>
    </ScrollView>
  );
}
