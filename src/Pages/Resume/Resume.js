import React from "react";
import { PDFWrapper } from "./Resume.Styled";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { data } from "./data";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 10,
    border: "2px solid red",
    alignContent: "center",
    // flexGrow: 1,
  },
  section: {
    margin: 10,
    padding: 10,
    border: "2px solid green",
    fontSize: "18px",
    width: "500px",
    flexDirection: "column",
    alignContent: "center",

  },
  box: {
    // maxWidth: "120px",
    objectFit: "2",
    margin: 10,
    padding: 10,
    border: "2px solid blue",
    fontSize: "14px",
  },
  viewer: {
    height: window.innerHeight,
  },
});

const Resume = () => (
  <PDFWrapper>
    <PDFViewer width="100%" style={styles.viewer}>
      <Document>
        <Page size="A3" style={styles.page}>
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
        </Page>
      </Document>
    </PDFViewer>
  </PDFWrapper>
);

export default Resume;
