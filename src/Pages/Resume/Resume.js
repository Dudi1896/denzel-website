import React from "react";
import {
  Page,
  Font,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Link,
} from "@react-pdf/renderer";
import { data } from "./data";
import logo from "../../assets/images/new-logo-d.png";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bullet from "../../assets/images/sqr-icon.png";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.cdnfonts.com/css/roboto" }, // font-style: normal, font-weight: normal
    { src: "https://fonts.cdnfonts.com/css/roboto", fontStyle: "italic" },
    {
      src: "https://fonts.cdnfonts.com/css/roboto",
      fontStyle: "italic",
      fontWeight: 700,
    },
  ],
});

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const styles = StyleSheet.create({
  group: {
    flexDirection: "column",
    border: "2px solid pink",
    minHeight: "11vh",
    fontSize: "25px",
    marginTop: "2vh",
    marginBottom: "0.5vh",
  },
  page: {
    paddingTop: "3.5vh",
    paddingBottom: "3.5vh",
    paddingLeft: "6vw",
    paddingRight: "6vw",
    flexDirection: "row",
    lineHeight: "1.75px",
    margin: "0",
  },
  leftColumn: {
    flex: "1",
    top: 0,
    left: 0,
    border: "2px dashed grey",
    fontSize: "40px",
    backgroundColor: "#F5F4FC",
    paddingLeft: "3vw",
  },
  rightColumn: {
    flex: "3.5",
    top: 0,
    right: 0,
    fontSize: "40px",
    border: "2px dashed red",
    backgroundColor: "#F5F4FC",
    paddingRight: "3vw",
    paddingLeft: "3vw",
  },
  header: {
    border: "2px solid green",
    fontSize: "100px",
    minHeight: "6vh",
    flex: 1,
  },
  summary: {
    flex: 1,
    border: "2px solid red",
    fontSize: "25px",
    minHeight: "3vh",
    marginTop: "1vh",
    width: "45vw",

  },
  section: {
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "2px solid green",
    fontSize: "25px",
    marginTop: ".125vw",
    marginBottom: "2vw",
    minwidth: "45vw",
  },
  logo: {
    border: "2px solid orange",
    index: "30",
    marginTop: "2vh",
    marginBottom: "0.5vh",
  },
  bullet: {
    width: ".5px",
    height: ".5px",
    fontSize: ".65vw",
    marginRight: "5px",
    transformOriginY: "-75%",
  },
  span:{
    display: "grid",
    border: "2px solid red",
    alignContent: "space-evenly;",
    flexDirection: "row",
  },
  box: {
    width: "16vw",
    border: "2px solid blue",
    fontSize: "25px",
    flexDirection: "column",
    alignContent: "center",
    marginTop: ".125vw",
    marginBottom: "2vw",
  },
  viewer: {
    height: "100%",
    width: "100%",
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
    <PDFViewer style={styles.viewer} showToolbar={false}>
      <Document>
        <Page size="A0" style={styles.page}>
          <View style={styles.leftColumn}>
            <View style={styles.logo}>
              <Image src={logo}></Image>
            </View>

            {data.contact.map((addr, index) => (
              <View style={styles.box} key={index}>
                <Text>{addr.website}</Text>
                <Text>{addr.address}</Text>
                <Text>{addr.email}</Text>
              </View>
            ))}

            <Text>Core Technologies:</Text>
            <View style={styles.box}>
              {data.technologies.map((techs, index) => (
                <Text key={index}>
                  <View style={styles.bullet}>
                    <Image src={bullet}></Image>
                  </View>
                  &nbsp; {techs}
                </Text>
              ))}
            </View>

            <Text>Other Skills:</Text>
            <View style={styles.box}>
              {data.otherProficiencies.map((prof, index) => (
                <Text key={index}>
                  <View style={styles.bullet}>
                    <Image src={bullet}></Image>
                  </View>
                  &nbsp; {prof}
                </Text>
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
                <View style={styles.summary} key={index}>
                  <Text key={index}>{summary}</Text>
                </View>
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
                  <Text key={index}>
                    <View style={styles.bullet}>
                      <Image src={bullet}></Image>
                    </View>
                    &nbsp;
                    {point}
                  </Text>
                ))}
              </View>
            ))}

            <Text>Projects</Text>
            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <Text>{proj.title1}</Text>
                {proj.points1.map((point1, index) => (
                  <Text key={index}>
                    <View style={styles.bullet}>
                      <Image src={bullet}></Image>
                    </View>
                    &nbsp;
                    {point1}
                  </Text>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <Text>{proj.title2}</Text>
                {proj.points2.map((point2, index) => (
                  <Text key={index}>
                    <View style={styles.bullet}>
                      <Image src={bullet}></Image>
                    </View>
                    &nbsp;
                    {point2}
                  </Text>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <Text>{proj.title3}</Text>
                {proj.points3.map((point3, index) => (
                  <Text key={index}>
                    <View style={styles.bullet}>
                      <Image src={bullet}></Image>
                    </View>
                    &nbsp;
                    {point3}
                  </Text>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <Text>{proj.title4}</Text>
                {proj.points4.map((point4, index) => (
                  <Text key={index}>
                    <View style={styles.bullet}>
                      <Image src={bullet}></Image>
                    </View>
                    &nbsp;
                    {point4}
                  </Text>
                ))}
              </View>
            ))}

            <Text>Education</Text>
            {data.education.map((education, index) => (
              <View style={styles.section} key={index}>
              <View style={styles.span}>
                <Text>{education.major1}</Text>
                <Text>&nbsp;{education.grade1}</Text>
                <Text>&nbsp;{education.school1}</Text>
                <Text>&nbsp;{education.date1}</Text>
              </View>

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
