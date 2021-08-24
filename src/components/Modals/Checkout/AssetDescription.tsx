import React from 'react';
import * as S from 'components/Modals/Checkout/styles';
import { Asset } from 'types/asset';

const AssetDescription = ({
  asset,
  balance,
  fee,
  total,
}: {
  asset: Asset;
  balance: string;
  fee: string;
  total: string;
}) => {
  return (
    <>
      <S.Title>Checkout</S.Title>
      <S.Head>
        <div>{asset.name}</div>
        <div>{asset.instantSalePrice} OCTN</div>
      </S.Head>
      <S.Row>
        <S.Label>Your balance</S.Label>
        <S.Value>{balance} OCTN</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>Service fee</S.Label>
        <S.Value>{fee} OCTN</S.Value>
      </S.Row>
      <S.Row>
        <S.Label>You will pay</S.Label>
        <S.Value>{total} OCTN</S.Value>
      </S.Row>
    </>
  );
};

export default AssetDescription;
