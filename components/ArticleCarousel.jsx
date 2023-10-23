import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import ItemArticle from "./ItemArticle";

const data = [
  {
    key: "1",
    title: "Penumpukan Sampah Plastik sadf",
    image:
      "https://img.freepik.com/free-photo/ground-littered-with-plastic-bottles_1268-20038.jpg?size=626&ext=jpg&uid=R61345513&ga=GA1.1.20262257.1697408307&semt=sph",
  },
  {
    key: "2",
    title: "Tanggung Jawab Sampah",
    image:
      "https://img.freepik.com/free-photo/white-plastic-plate-spoon-sand-beach_23-2148214514.jpg?size=626&ext=jpg&uid=R61345513&ga=GA1.1.20262257.1697408307&semt=sph",
  },
  {
    key: "3",
    title: "Tanggung Jawab Sampah Tanggung Jawab Sampah",
    image:
      "https://img.freepik.com/free-photo/white-plastic-plate-spoon-sand-beach_23-2148214514.jpg?size=626&ext=jpg&uid=R61345513&ga=GA1.1.20262257.1697408307&semt=sph",
  },
];

export default ArticleCarousel = ({ navigation }) => {
  return (
    <View className="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item, index }) => (
            <ItemArticle
              item={item}
              data={data.length.toString()}
              index={index}
            />
          )}
          keyExtractor={(item) => item.id}
          width={200}
          className="mt-6 w-[100%]"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
