import { ICard } from "@/interfaces";
import * as S from "./styles"

export function Cards({plan, price}: ICard) {
    return (
        <S.Container>
            <h2>{plan}</h2>
            <p>{price}</p>
        </S.Container>
    )
}