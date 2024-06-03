import { BlogPreview } from '@/types/BlogPreview';
import { Deposit } from '@/types/Deposit';
import { Fund } from '@/types/Fund';

class DbSingleton {
  private static instance: DbSingleton;
  private funds: Fund[] = [];
  private deposits: Deposit[] = [];
  private blogPreviews: BlogPreview[] = [];

  private constructor() {
    this.initaliseFunds();
    this.initaliseMarketingContent();
  }

  public static getInstance(): DbSingleton {
    if (!DbSingleton.instance) {
      DbSingleton.instance = new DbSingleton();
    }

    return DbSingleton.instance;
  }

  public createDeposit(deposit: Deposit): void {
    this.deposits.push(deposit);
  }

  public getAllFunds(): Fund[] {
    return this.funds;
  }

  public getBlogContent(): BlogPreview[] {
    return this.blogPreviews;
  }

  private initaliseFunds(): void {
    this.funds = [
      {
        uuid: '8be85a12-516d-46f9-b4af-de68d9a09003',
        name: 'Cushon Equities Fund',
        isin: 'GB00B8PJ5H93',
        imgUrl: '/cushon.png',
        desc: 'Our all star fund offering great performance split between specially selected range of top-rated funds!'
      },
      {
        uuid: '54121e09-2b3c-4308-baaa-b92a7d8ec39d',
        name: 'Liontrust High Income A Acc',
        isin: 'GB00B8KC8M99',
        imgUrl: '/lionstrust.png',
        desc: 'Generate a monthly income with a global portfolio of funds across a range of countries and asset classes'
      },
      {
        uuid: '8466e0f2-9760-43e6-9528-34e6be23279e',
        name: 'AXA Distribution',
        isin: 'GB0006160328',
        imgUrl: '/axa.jpg',
        desc: 'Achieve income with some prospects for capital growth over a period of five years or more.'
      }
    ];
  }

  private initaliseMarketingContent(): void {
    this.blogPreviews = [
      {
        uuid: '3adc5c9a-87bb-4e51-8bfc-4c2a747988ac',
        publishedDate: '1st June 2024',
        imgUrl:
          'https://images.ctfassets.net/vr5zy0qyj9mq/4AFexHAMEOicfBBOb2LjGq/fab9a78286bc2b1834286165d253b10e/mansionhouseblogcover.png',
        title: 'Cushon Launch Retail ISA',
        content:
          'The famous Cushon ISA is released to all retail customers with all your favourite funds available to invest.',
        buttonLink: '/retail/isa',
        buttonText: 'Discover'
      },
      {
        uuid: '3edb5c05-b8db-4a4e-bd1f-b931bf84c063',
        publishedDate: '20th May 2024',
        imgUrl:
          'https://images.ctfassets.net/vr5zy0qyj9mq/2QJKCn6bFN0YfHqrmvSt8L/4e4e469fecaa82984cbe0a919a8d1793/Acquisition-Blog-Cover.png',
        title: 'Workers Pension Trust consolidated',
        content:
          'Cushon announces that the consolidation of the Workers Pension Trust (WPT) into Cushon Master Trust has been completed.',
        buttonLink: '/',
        buttonText: 'Read more'
      },
      {
        uuid: '8882c86c-f3c4-455e-bd29-1ee8d8eff878',
        publishedDate: '10th May 2024',
        imgUrl:
          'https://images.ctfassets.net/vr5zy0qyj9mq/iCAaclev9P4q3lw0uWqq4/af4033c47e142868dcf55423281ed992/Blog-Covers.png',
        title: 'Pot for life',
        content:
          'New research by Social Market Foundation and Cushon reveals support for member choice.',
        buttonLink: '/',
        buttonText: 'Read more'
      }
    ];
  }
}

export default DbSingleton;
