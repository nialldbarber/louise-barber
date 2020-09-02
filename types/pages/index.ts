export interface MainImages {
  fields: {
    description: string;
    file: {
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
      fileName: string;
      url: string;
    };
    title: string;
  };
  sys: {
    createdAt: string;
    id: string;
    updatedAt: string;
  };
}

export interface Items {
  fields: {
    mainImage: Array<MainImages>;
  };
  sys: {
    createdAt: string;
    id: string;
    updatedAt: string;
  };
}

export interface Entries {
  items: Array<Items>;
}
