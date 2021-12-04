export interface ISymbol {
    symbol: string;
    markPrice: string;
    indexPrice: string;
    estimatedSettlePrice: string;
    lastFundingRate: string;
    interestRate: string;
    nextFundingTime: Date;
    time: Date;
    rialPrice?: string;
    createdAt: string;
    updatedAt: string;
}
