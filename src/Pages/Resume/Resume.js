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
    flexDirection: "column",
    border: "2px solid pink",
    minHeight: "150px",
  },
  page: {
    backgroundColor: "#E4E4E4",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 35,
    paddingRight: 35,
    border: "3px solid blue",
    flexDirection: "row",
    lineHeight: "1.5px",
  },
  leftColumn: {
    flex: "1",
    top: 0,
    left: 0,
    border: "2px dashed grey",
  },
  rightColumn: {
    flex: "3.5",
    top: 0,
    right: 0,
    border: "2px dashed red",
    // width: "70%",
  },
  header: {
    marginVertical: 5,
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "2px solid green",
    fontSize: "35px",
    maxWidth: "350px",
    flex: 1,
  },
  summary: {
    flex: 1,
    border: "2px solid red",
    fontSize: "12px",
    maxWidth: "400px",
  },
  section: {
    marginVertical: 5,
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "2px solid green",
    fontSize: "12px",
  },
  box: {
    maxWidth: "165px",
    marginVertical: 5,
    padding: 5,
    border: "2px solid blue",
    fontSize: "12px",
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
                <Text>{addr.email}</Text>
              </View>
            ))}

            <Text>Core Technologies</Text>
            <View style={styles.box}>
              <Text>Core Technologies</Text>
              {data.technologies.map((techs, index) => (
                <Text key={index}>• {techs}</Text>
              ))}
            </View>

            <Text>Other Skills</Text>
            <View style={styles.box}>
            <Text>Other Skills</Text>
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

          <Text>Work Experience</Text>
          {data.companies.map((company, index) => (
            <View style={styles.section} key={index}>
              <Text>{company.title}</Text>
              <Text>{company.name}</Text>
              <Text>{company.role}</Text>
              <Text>{company.period}</Text>
              {company.points.map((point, index) => (
                <Text key={index}>• {point}</Text>
              ))}
            </View>
          ))}

        <Text>Projects</Text>
          {data.projects.map((proj, index) => (
            <View style={styles.section} key={index}>
              <Text>{proj.title1}</Text>
              {proj.points1.map((point1, index) => (
                <Text key={index}>• {point1}</Text>
              ))}
            </View>
          ))}

        {data.projects.map((proj, index) => (
            <View style={styles.section} key={index}>
              <Text>{proj.title2}</Text>
              {proj.points2.map((point2, index) => (
                <Text key={index}>• {point2}</Text>
              ))}
            </View>
          ))}

        {data.projects.map((proj, index) => (
            <View style={styles.section} key={index}>
              <Text>{proj.title3}</Text>
              {proj.points3.map((point3, index) => (
                <Text key={index}>• {point3}</Text>
              ))}
            </View>
          ))} 

        {data.projects.map((proj, index) => (
            <View style={styles.section} key={index}>
              <Text>{proj.title4}</Text>
              {proj.points4.map((point4, index) => (
                <Text key={index}>• {point4}</Text>
              ))}
            </View>
          ))} 

        <Text>Education</Text>
          {data.education.map((education, index) => (
            <View style={styles.section} key={index}>
              <Text>{education.major1}</Text>
              <Text>{education.grade1}</Text>
              <Text>{education.school1}</Text>
              <Text>{education.date1}</Text>

              <Text>{education.major2}</Text>
              <Text>{education.grade2}</Text>
              <Text>{education.school2}</Text>
              <Text>{education.date2}</Text>
            </View>
          ))}

          </View>
        </Page>
      </Document>
    </PDFViewer>
  </>
);

export default Resume;
