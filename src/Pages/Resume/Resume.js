import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Link,
} from "@react-pdf/renderer";
import { data } from "./data";
import logo from "../../assets/images/logo-d.png";
import bullet from "../../assets/images/sqr-icon.png";
import linkedIn from "../../assets/images/logo-linkedin.png";

const styles = StyleSheet.create({
  group: {
    flexDirection: "column",
    // border: "2px dashed yellowgreen",
    justifyContent: "space-between",
    marginBottom: "1vh",
    marginTop: "2.5vh",
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
    // border: "2px dashed grey",
    fontSize: "30px",
    backgroundColor: "#F5F4FC",
    paddingLeft: "3vw",
  },
  rightColumn: {
    flex: "3.5",
    top: 0,
    right: 0,
    fontSize: "30px",
    // border: "2px dashed red",
    backgroundColor: "#F5F4FC",
    paddingRight: "3vw",
    paddingLeft: "3vw",
    color: "#000947",
  },
  iconTops: {
    flexDirection: "row-reverse",
    // border: "2px dashed yellowgreen",
    fontSize: "12px",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "6.5vw",
    marginLeft: "51vw",
    marginTop: ".75vh",
    lineHeight: ".9px",
  },
  iconImage: {
    width: "1vw",
    // border: "2px solid blue",
  },
  downloadImage: {
    width: "4.5vw",
    fontSize: "11px",
    // border: "2px solid blue",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  header: {
    // border: "2px solid green",
    flexWrap: "wrap",
    fontSize: "86px",
    maxWidth: "26vw",
    lineHeight: "1px",
    color: "#41CBBF",
  },
  subHeader: {
    // border: "2px solid transparent",
    // flexWrap: "wrap",
    fontSize: "30px",
    maxWidth: "56vw",
    marginTop: "1vh",
    color: "#000947",
  },
  summary: {
    // border: "2px solid red",
    fontSize: "20px",
    minHeight: "4vh",
    marginTop: ".5vh",
    color: "#727274",
    width: "45vw",
  },
  rows: {
    // border: "2px solid red",
    fontSize: "20px",
    width: "45vw",
  },
  titles: {
    borderBottom: "2px solid #727274",
    fontSize: "30px",
    width: "61.3vw",
    lineHeight: "1.5px",
    marginTop: "1vh",
  },
  section: {
    // border: "2px solid green",
    fontSize: "20px",
    marginTop: "1vw",
    marginBottom: "1vw",
    minwidth: "45vw",
    color: "#727274",
  },
  logo: {
    index: "30",
    marginTop: "4.5vh",
    marginBottom: "0.5vh",
    width: "16vw",
  },
  bullet: {
    width: ".5px",
    height: ".5px",
    fontSize: ".85vw",
    marginRight: "5px",
    marginBottom: "2.5px",
  },
  wideItems: {
    flexDirection: "row",
    // border: "2px dashed yellowgreen",
    fontSize: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#727274",
  },
  subTitle: {
    borderBottom: "6px solid #41CBBF",
    marginBottom: ".5vh",
    width: "16vw",
  },
  span: {
    // border: "2px solid red",
    flexWrap: "wrap",
  },
  box: {
    width: "16vw",
    // border: "2px solid blue",
    fontSize: "20px",
    flexDirection: "column",
    alignContent: "center",
    marginTop: ".125vw",
    marginBottom: "2vw",
    color: "#727274",
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
    <PDFViewer style={styles.viewer} showToolbar={true}>
      <Document>
        <Page size="A1" style={styles.page}>
          <View style={styles.leftColumn}>
            <Link src="http://localhost:3000">
              <View style={styles.logo}>
                <Image src={logo}></Image>
              </View>
            </Link>

            {data.contact.map((addr, index) => (
              <View style={styles.box} key={index}>
                <Text>{addr.website}</Text>
                <Text>{addr.address}</Text>
                <Text>{addr.email}</Text>
              </View>
            ))}

            <Text style={styles.customFont}>Core Technologies:</Text>
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
            <View style={styles.iconTops}>
              {/* <PDFDownloadLink>
                <View style={styles.downloadImage}>
                  <Text>Download</Text>
                  <View style={styles.iconImage}>
                    <Image src={dlIcon}></Image>
                  </View>
                </View>
              </PDFDownloadLink> */}

              <Link
                src="https://www.linkedin.com/in/denzel-udemba-3500505b/"
                target="_blank"
                rel="noreferrer"
              >
                <View style={styles.iconImage}>
                  <Image src={linkedIn}></Image>
                </View>
              </Link>
            </View>
            <View style={styles.group}>
              {data.header.map((header, index) => (
                <View style={styles.header} key={index}>
                  <Text>{header.name}</Text>
                </View>
              ))}

              {data.header.map((header, index) => (
                <View style={styles.subHeader} key={index}>
                  <Text>{header.occupation}</Text>
                </View>
              ))}

              {data.summary.map((summary, index) => (
                <View style={styles.summary} key={index}>
                  <Text key={index}>{summary}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.titles}>Work Experience</Text>
            {data.companies.map((company, index) => (
              <View style={styles.section} key={index}>
                <View style={styles.wideItems}>
                  <View style={styles.subTitle}>
                    <View style={styles.span}>
                      <Text>{company.name}</Text>
                    </View>
                  </View>

                  <View style={styles.span}>
                    <Text>{company.period}</Text>
                  </View>
                </View>

                {company.points.map((point, index) => (
                  <View style={styles.rows} key={index}>
                    <Text>
                      <View style={styles.bullet}>
                        <Image src={bullet}></Image>
                      </View>
                      &nbsp;
                      {point}
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            <Text style={styles.titles}>Projects</Text>
            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <View style={styles.subTitle}>
                  <View style={styles.span}>
                    <Text>{proj.title1}</Text>
                  </View>
                </View>

                {proj.points1.map((point1, index) => (
                  <View style={styles.rows} key={index}>
                    <Text>
                      <View style={styles.bullet}>
                        <Image src={bullet}></Image>
                      </View>
                      &nbsp;
                      {point1}
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <View style={styles.subTitle}>
                  <View style={styles.span}>
                    <Text>{proj.title2}</Text>
                  </View>
                </View>
                {proj.points2.map((point2, index) => (
                  <View style={styles.rows} key={index}>
                    <Text>
                      <View style={styles.bullet}>
                        <Image src={bullet}></Image>
                      </View>
                      &nbsp;
                      {point2}
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <View style={styles.subTitle}>
                  <View style={styles.span}>
                    <Text>{proj.title3}</Text>
                  </View>
                </View>
                {proj.points3.map((point3, index) => (
                  <View style={styles.rows} key={index}>
                    <Text>
                      <View style={styles.bullet}>
                        <Image src={bullet}></Image>
                      </View>
                      &nbsp;
                      {point3}
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            {data.projects.map((proj, index) => (
              <View style={styles.section} key={index}>
                <View style={styles.subTitle}>
                  <View style={styles.span}>
                    <Text>{proj.title4}</Text>
                  </View>
                </View>
                {proj.points4.map((point4, index) => (
                  <View style={styles.rows} key={index}>
                    <Text>
                      <View style={styles.bullet}>
                        <Image src={bullet}></Image>
                      </View>
                      &nbsp;
                      {point4}
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            <Text style={styles.titles}>Education</Text>
            {data.education.map((education, index) => (
              <View style={styles.wideItems} key={index}>
                <View style={styles.span}>
                  <Text>{education.major1}</Text>
                  <Text>{education.major2}</Text>
                </View>

                <View style={styles.span}>
                  <Text>{education.grade1}</Text>
                  <Text>{education.grade2}</Text>
                </View>

                <View style={styles.span}>
                  <Text>{education.school1}</Text>
                  <Text>{education.school2}</Text>
                </View>

                <View style={styles.span}>
                  <Text>{education.date1}</Text>
                  <Text>{education.date2}</Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  </>
  // );
);

export default Resume;
