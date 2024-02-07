import styled from 'styled-components'

export const HistoryContainer = styled.main`
  max-width: 60.1875rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  /* overflow: auto; */

  display: flex;
  gap: 2rem;
  flex-direction: column;

  header {
    h1 {
      color: ${({ theme }) => theme['gray-100']};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  @media (max-width: 640px) {
    padding: 2rem 0;
    padding-bottom: 4rem;
  }

  @media (max-width: 640px) and (max-height: 900px) {
    gap: 1rem;
  }
`

export const TableContainer = styled.div`
  flex: 1;

  /* overflow: auto; */

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 15.625rem;
    thead tr {
      display: grid;
      grid-template-columns: 4fr 1.5fr 2fr 2fr;
      gap: 1rem;

      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem 1.5rem;

      border-radius: 8px 8px 0 0;

      th {
        color: ${({ theme }) => theme['gray-100']};
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.6;
        text-align: start;
      }
    }
    thead .head {
      @media (max-width: 640px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & th:first-child {
          font-size: 1.25rem;
        }
        & th:last-child {
          font-size: 1.125rem;
        }
      }
    }

    tbody {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      overflow-y: scroll;
      height: 100%;
      max-height: 25.125rem;

      & tr:last-child {
        border-radius: 0 0 8px 8px;
      }

      @media (max-width: 640px) {
        display: block;
      }
      @media (max-width: 640px) and (max-height: 960px) {
        max-height: 42rem;
      }
      @media (max-width: 640px) and (max-height: 900px) {
        max-height: 42rem;
      }
      @media (max-width: 640px) and (max-height: 860px) {
        max-height: 38rem;
      }
      @media (max-width: 640px) and (max-height: 760px) {
        max-height: 30.375rem;
      }
      @media (max-width: 640px) and (max-height: 720px) {
        max-height: 26rem;
      }
    }
  }
`
