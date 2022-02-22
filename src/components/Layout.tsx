import {
  Content,
  Flex,
  Footer,
  Grid,
  Heading,
  View,
} from "@adobe/react-spectrum";
import { DetailViewContextProvider } from "../contexts/DetailViewContext";
import { DetailView } from "./DetailView";
import { BirthRangeSlider, FilmPicker, SpeciesPicker } from "./filter";
import { PeopleList } from "./PeopleList";

export const UserInterface = () => (
  <DetailViewContextProvider>
    <Grid
      areas={["header  header", "sidebar content", "footer  footer"]}
      columns={["1fr", "3fr"]}
      rows={["size-1000", "1fr", "size-1000"]}
      gap="size-100"
      minHeight="100vh"
      maxHeight="100vh"
    >
      <View gridArea="header" marginTop="size-250" marginStart="size-500">
        <Flex gap="size-500">
          <FilmPicker />
          <SpeciesPicker />
          <BirthRangeSlider />
        </Flex>
      </View>
      <View gridArea="sidebar" overflow="hidden" marginStart="size-500">
        <Flex direction="column" height="100%">
          <Heading>Characters</Heading>
          <PeopleList />
        </Flex>
      </View>
      <Content gridArea="content" marginEnd="size-500">
        <Flex direction="column" height="100%">
          <Heading>Details</Heading>
          <DetailView />
        </Flex>
      </Content>
      <Footer gridArea="footer" marginStart="size-500" marginEnd="size-500">
        <Heading>Open code on Github</Heading>
      </Footer>
    </Grid>
  </DetailViewContextProvider>
);
