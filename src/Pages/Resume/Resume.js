import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";
import { data } from "./data";

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    // display: "flex",
    // flexWrap: "wrap",
    border: "2px solid pink",
  },
  page: {
    backgroundColor: "#E4E4E4",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 35,
    paddingRight: 35,
    border: "3px solid blue",
    flexDirection: "row",
  },
  leftColumn: {
    flex: "1",
    top: 0,
    left: 0,
    border: "2px dashed grey",
  },
  rightColumn: {
    flex: "4",
    top: 0,
    right: 0,
    border: "2px dashed red",
    width: "70%",
  },
  header: {
    marginVertical: 5,
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "2px solid green",
    fontSize: "30px",
    flexWrap: "wrap",
    flex: 1,
    overflow: "hidden",
    wordWrap: "break-word",
  },
  summary: {
    flex: 1,
    border: "2px solid red",
    fontSize: "9px",
  },
  section: {
    marginVertical: 5,
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "2px solid green",
    fontSize: "9px",
  },
  box: {
    maxWidth: "132px",
    marginVertical: 5,
    padding: 5,
    border: "2px solid blue",
    fontSize: "9px",
    flexDirection: "column",
    alignContent: "center",
  },
  viewer: {
    height: "99.97%",
    width: "99.7%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: "none",
  },
});

const Resume = () => (
  <>
    <PDFViewer style={styles.viewer} showToolbar={true}>
      <Document>
        <Page size="A3" style={styles.page}>
          <View style={styles.leftColumn}>
            {data.contact.map((addr, index) => (
              <View style={styles.box} key={index}>
                <Text>{addr.website}</Text>
                <Text>{addr.address}</Text>
              </View>
            ))}

            <View style={styles.box}>
              {data.technologies.map((techs, index) => (
                <Text key={index}>• {techs}</Text>
              ))}
            </View>

            <View style={styles.box}>
              {data.otherProficiencies.map((prof, index) => (
                <Text key={index}>• {prof}</Text>
              ))}
            </View>
          </View>

          <View style={styles.rightColumn}>
          <View style={styles.group}>
            {data.header.map((header, index) => (
              <View style={styles.header} key={index}>
                <Text>{header.name}</Text>
                <Text>{header.occupation}</Text>
              </View>
            ))}

            {data.summary.map((summary, index) => (
              <view style={styles.summary} key={index}>
                <Text key={index}>{summary}</Text>
              </view>
            ))}
          </View>

          {data.companies.map((company, index) => (
            <View style={styles.section} key={index}>
              <Text>{company.name}</Text>
              <Text>{company.role}</Text>
              <Text>{company.period}</Text>
              <Text>{company.intro}</Text>
              {company.points.map((point, index) => (
                <Text key={index}>• {point}</Text>
              ))}
            </View>
          ))}
          </View>


        </Page>
      </Document>
    </PDFViewer>
  </>
);

export default Resume;
