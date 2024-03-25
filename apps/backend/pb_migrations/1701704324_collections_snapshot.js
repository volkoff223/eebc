migrate(
  (db) => {
    const snapshot = [
      {
        id: "_pb_users_auth_",
        created: "2023-07-02 17:52:35.468Z",
        updated: "2023-12-03 01:56:44.731Z",
        name: "users",
        type: "auth",
        system: false,
        schema: [
          {
            system: false,
            id: "users_name",
            name: "name",
            type: "text",
            required: false,
            unique: false,
            options: {
              min: null,
              max: null,
              pattern: "",
            },
          },
          {
            system: false,
            id: "users_avatar",
            name: "avatar",
            type: "file",
            required: false,
            unique: false,
            options: {
              maxSelect: 1,
              maxSize: 5242880,
              mimeTypes: [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp",
              ],
              thumbs: null,
              protected: false,
            },
          },
          {
            system: false,
            id: "oeuq1sxa",
            name: "isAdmin",
            type: "bool",
            required: false,
            unique: false,
            options: {},
          },
        ],
        indexes: [],
        listRule: "id = @request.auth.id",
        viewRule: "id = @request.auth.id",
        createRule: "",
        updateRule: "id = @request.auth.id",
        deleteRule: "id = @request.auth.id",
        options: {
          allowEmailAuth: true,
          allowOAuth2Auth: true,
          allowUsernameAuth: true,
          exceptEmailDomains: null,
          manageRule: null,
          minPasswordLength: 8,
          onlyEmailDomains: null,
          requireEmail: false,
        },
      },
      {
        id: "av34ezp5prmwbud",
        created: "2023-12-02 21:11:34.380Z",
        updated: "2023-12-03 03:44:52.062Z",
        name: "products",
        type: "base",
        system: false,
        schema: [
          {
            system: false,
            id: "8bzerxue",
            name: "product",
            type: "text",
            required: true,
            unique: false,
            options: {
              min: null,
              max: null,
              pattern: "",
            },
          },
          {
            system: false,
            id: "naodygtm",
            name: "description",
            type: "text",
            required: true,
            unique: false,
            options: {
              min: null,
              max: null,
              pattern: "",
            },
          },
          {
            system: false,
            id: "eezomc5g",
            name: "price",
            type: "number",
            required: false,
            unique: false,
            options: {
              min: null,
              max: null,
            },
          },
          {
            system: false,
            id: "izhhbzae",
            name: "images",
            type: "file",
            required: false,
            unique: false,
            options: {
              maxSelect: 99,
              maxSize: 5242880,
              mimeTypes: [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp",
              ],
              thumbs: [],
              protected: false,
            },
          },
          {
            system: false,
            id: "fukeuxsy",
            name: "thumbnail",
            type: "file",
            required: false,
            unique: false,
            options: {
              maxSelect: 1,
              maxSize: 5242880,
              mimeTypes: [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp",
              ],
              thumbs: ["80x80"],
              protected: false,
            },
          },
        ],
        indexes: [],
        listRule: "",
        viewRule: "",
        createRule: "@request.auth.isAdmin = true",
        updateRule: "@request.auth.isAdmin = true",
        deleteRule: "@request.auth.isAdmin = true",
        options: {},
      },
    ];

    const collections = snapshot.map((item) => new Collection(item));

    return Dao(db).importCollections(collections, true, null);
  },
  (db) => {
    return null;
  }
);
