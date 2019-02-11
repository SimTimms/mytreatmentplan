import { gql } from 'apollo-boost';
export const GET_CONTENT = gql`
  query diagnosisContent($id: String!) {
    publicDiagnosisContent(id: $id) {
      id
      name
      pages {
        title
        header {
          title
          subtitle
          icon
        }
        learnMoreTitle
        learnMoreMessage
        content {
          gallery {
            slides {
              name
              image
            }
          }
          richText {
            text
          }
        }
        orderNbr
      }
    }
  }
`;

export const GET_DIAGNOSIS = gql`
  query getDiagnosis($id: String!) {
    publicBodyPart(id: $id) {
      id
      options {
        id
        name
      }
    }
  }
`;

export const FULL_CONTENT = gql`
  query diagnosisContent($id: String!, $typeId: String!) {
    getCommonPlan(diagnosisId: $id, typeId: $typeId) {
      diagnosisId
      options

      treatments {
        type {
          name
          id
        }
        name
        timeline {
          title
          subtitle
          conditionFeature {
            title
            duration
          }
          timelineNote {
            subtitle
            startPeriod
          }
        }
        exerciseList {
          name
          description
          videos
          images
        }
        exerciseLevels {
          level
          exercises
        }
        pages {
          title
          header {
            icon
            title
            subtitle
          }
          content {
            richText {
              text
            }
          }
        }
      }
    }
  }
`;
