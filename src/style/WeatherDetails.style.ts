import styled from 'styled-components';

export const WeatherDetailsStyled = styled.div`
    min-height: 200px;
    width: 25vw;
    margin: 20px;
    padding: 15px;
    background: #fff;
    border-radius: 20px;
    transition: transform .8s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow:
        0 -6.7px 15.3px rgb(0 0 0 / 8%), 
        0 6.7px 5.3px rgb(0 0 0 / 2%), 
        0 12.5px 10px rgb(0 0 0 / 6%), 
        0 22.3px 17.9px rgb(0 0 0 / 4%), 
        0 41.8px 33.4px rgb(0 0 0 / 5%);

    & .weather__date {
        display: flex;
        justify-content: space-between;
        & span:first-of-type {
            font-weight: bold;
        }
        & span:last-of-type {
            text-decoration: underline;
        }
    }

    & .weather__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1.3em;

        & div {
            padding: 10px 0;

            & i {
                padding-right: 10px;
            }
        }
    }

    & .weather__description {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        border-top: 3px solid rgb(0 0 0 / 10%);

        & > span {
            margin: 0 10px;
        }
    }
`
