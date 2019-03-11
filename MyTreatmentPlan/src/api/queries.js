import { gql } from 'apollo-boost';
export const GET_DIAGNOSIS_CONTENT = gql`
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
            type
            text
          }
        }
        orderNbr
      }
      timeline {
        title
        subtitle
        conditionFeature {
          title
          duration
        }
        timelineNote {
          title
          subtitle
          startPeriod
          endPeriod
        }
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
      exerciseDetails {
        id
        name
        videos
        images
        description
      }
      treatments {
        type {
          name
          id
        }
        name
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
      investigations {
        type {
          name
          id
        }
        name
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
      optionsDiscussed {
        type {
          name
          id
        }
        name
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
