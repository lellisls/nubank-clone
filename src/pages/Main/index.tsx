import React from "react";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from "./styles";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Menu from "../../components/Menu";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"></Icon>
            <Icon name="visibility-off" size={28} color="#666"></Icon>
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 2.453.654,06</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 2.453.460,00 recebida de Loteria Federal
            </Annotation>
          </CardFooter>
        </Card>
        <Menu></Menu>
      </Content>
      <Tabs></Tabs>
    </Container>
  );
}
