# jean-librairie


<!-- Generator: Widdershins v4.0.1 -->

<h1 id="documentation">DOCUMENTATION v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:1337">http://localhost:1337</a>

* <a href="YOUR_STAGING_SERVER">YOUR_STAGING_SERVER</a>

* <a href="YOUR_PRODUCTION_SERVER">YOUR_PRODUCTION_SERVER</a>

<a href="YOUR_TERMS_OF_SERVICE_URL">Terms of service</a>
Email: <a href="mailto:contact-email@something.io">TEAM</a> Web: <a href="mywebsite.io">TEAM</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="documentation-auteur">Auteur</h1>

## get__auteurs

`GET /auteurs`

<h3 id="get__auteurs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "nom",
      "prenom"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "nom": {
        "type": "string"
      },
      "prenom": {
        "type": "string"
      },
      "annee_naissance": {
        "type": "integer"
      },
      "nationalite": {
        "type": "string"
      },
      "livres": {
        "type": "array",
        "items": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "titre": {
              "type": "string"
            },
            "resume": {
              "type": "string"
            },
            "date_publication": {
              "type": "string"
            },
            "disponibilte": {
              "type": "boolean"
            },
            "slug": {
              "type": "string"
            },
            "langue": {
              "type": "string"
            },
            "categorie": {
              "type": "string"
            },
            "auteur": {
              "type": "string"
            },
            "empreint": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__auteurs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__auteurs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Auteur](#schemaauteur)]|false|none|none|
|» id|string|true|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» annee_naissance|integer|false|none|none|
|» nationalite|string|false|none|none|
|» livres|[any]|false|none|none|
|»» id|string|true|none|none|
|»» titre|string|false|none|none|
|»» resume|string|false|none|none|
|»» date_publication|string|false|none|none|
|»» disponibilte|boolean|false|none|none|
|»» slug|string|false|none|none|
|»» langue|string|false|none|none|
|»» categorie|string|false|none|none|
|»» auteur|string|false|none|none|
|»» empreint|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auteurs

`POST /auteurs`

Create a new record

> Body parameter

```json
{
  "required": [
    "nom",
    "prenom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auteurs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewAuteur](#schemanewauteur)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom",
    "prenom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "titre": {
            "type": "string"
          },
          "resume": {
            "type": "string"
          },
          "date_publication": {
            "type": "string"
          },
          "disponibilte": {
            "type": "boolean"
          },
          "slug": {
            "type": "string"
          },
          "langue": {
            "type": "string"
          },
          "categorie": {
            "type": "string"
          },
          "auteur": {
            "type": "string"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__auteurs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Auteur](#schemaauteur)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__auteurs_count

`GET /auteurs/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__auteurs_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__auteurs_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__auteurs_{id}

`GET /auteurs/{id}`

<h3 id="get__auteurs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom",
    "prenom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "titre": {
            "type": "string"
          },
          "resume": {
            "type": "string"
          },
          "date_publication": {
            "type": "string"
          },
          "disponibilte": {
            "type": "boolean"
          },
          "slug": {
            "type": "string"
          },
          "langue": {
            "type": "string"
          },
          "categorie": {
            "type": "string"
          },
          "auteur": {
            "type": "string"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__auteurs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Auteur](#schemaauteur)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__auteurs_{id}

`PUT /auteurs/{id}`

Update a record

> Body parameter

```json
{
  "required": [
    "nom",
    "prenom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__auteurs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewAuteur](#schemanewauteur)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom",
    "prenom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "titre": {
            "type": "string"
          },
          "resume": {
            "type": "string"
          },
          "date_publication": {
            "type": "string"
          },
          "disponibilte": {
            "type": "boolean"
          },
          "slug": {
            "type": "string"
          },
          "langue": {
            "type": "string"
          },
          "categorie": {
            "type": "string"
          },
          "auteur": {
            "type": "string"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__auteurs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Auteur](#schemaauteur)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__auteurs_{id}

`DELETE /auteurs/{id}`

Delete a record

<h3 id="delete__auteurs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__auteurs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-categorie">Categorie</h1>

## get__categories

`GET /categories`

<h3 id="get__categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "nom"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "nom": {
        "type": "string"
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Categorie](#schemacategorie)]|false|none|none|
|» id|string|true|none|none|
|» nom|string|true|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__categories

`POST /categories`

Create a new record

> Body parameter

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewCategorie](#schemanewcategorie)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Categorie](#schemacategorie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__categories_count

`GET /categories/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__categories_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__categories_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__categories_{id}

`GET /categories/{id}`

<h3 id="get__categories_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__categories_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Categorie](#schemacategorie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__categories_{id}

`PUT /categories/{id}`

Update a record

> Body parameter

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__categories_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewCategorie](#schemanewcategorie)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__categories_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Categorie](#schemacategorie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__categories_{id}

`DELETE /categories/{id}`

Delete a record

<h3 id="delete__categories_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__categories_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-empreint">Empreint</h1>

## get__empreints

`GET /empreints`

<h3 id="get__empreints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "livre": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "titre": {
            "type": "string"
          },
          "resume": {
            "type": "string"
          },
          "date_publication": {
            "type": "string"
          },
          "disponibilte": {
            "type": "boolean"
          },
          "slug": {
            "type": "string"
          },
          "langue": {
            "type": "string"
          },
          "categorie": {
            "type": "string"
          },
          "auteur": {
            "type": "string"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "utilisateur": {
        "required": [
          "id",
          "email",
          "nom",
          "prenom",
          "date_naissance"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "confirmed": {
            "type": "boolean"
          },
          "blocked": {
            "type": "boolean"
          },
          "role": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "date_naissance": {
            "type": "datetime"
          },
          "date_inscription": {
            "type": "datetime"
          },
          "derniere_cnx": {
            "type": "datetime"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "date_empreint": {
        "type": "datetime"
      },
      "date_retour": {
        "type": "datetime"
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__empreints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__empreints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Empreint](#schemaempreint)]|false|none|none|
|» id|string|true|none|none|
|» livre|object|false|none|none|
|»» id|string|true|none|none|
|»» titre|string|false|none|none|
|»» resume|string|false|none|none|
|»» date_publication|string|false|none|none|
|»» disponibilte|boolean|false|none|none|
|»» slug|string|false|none|none|
|»» langue|string|false|none|none|
|»» categorie|string|false|none|none|
|»» auteur|string|false|none|none|
|»» empreint|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» utilisateur|object|false|none|none|
|»» id|string|true|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» provider|string|false|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» confirmed|boolean|false|none|none|
|»» blocked|boolean|false|none|none|
|»» role|string|false|none|none|
|»» nom|string|true|none|none|
|»» prenom|string|true|none|none|
|»» date_naissance|datetime|true|none|none|
|»» date_inscription|datetime|false|none|none|
|»» derniere_cnx|datetime|false|none|none|
|»» empreint|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» date_empreint|datetime|false|none|none|
|» date_retour|datetime|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__empreints

`POST /empreints`

Create a new record

> Body parameter

```json
{
  "properties": {
    "livre": {
      "type": "string"
    },
    "utilisateur": {
      "type": "string"
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__empreints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewEmpreint](#schemanewempreint)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "livre": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "titre": {
          "type": "string"
        },
        "resume": {
          "type": "string"
        },
        "date_publication": {
          "type": "string"
        },
        "disponibilte": {
          "type": "boolean"
        },
        "slug": {
          "type": "string"
        },
        "langue": {
          "type": "string"
        },
        "categorie": {
          "type": "string"
        },
        "auteur": {
          "type": "string"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "utilisateur": {
      "required": [
        "id",
        "email",
        "nom",
        "prenom",
        "date_naissance"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "confirmed": {
          "type": "boolean"
        },
        "blocked": {
          "type": "boolean"
        },
        "role": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "date_naissance": {
          "type": "datetime"
        },
        "date_inscription": {
          "type": "datetime"
        },
        "derniere_cnx": {
          "type": "datetime"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__empreints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Empreint](#schemaempreint)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__empreints_count

`GET /empreints/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__empreints_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__empreints_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__empreints_{id}

`GET /empreints/{id}`

<h3 id="get__empreints_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "livre": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "titre": {
          "type": "string"
        },
        "resume": {
          "type": "string"
        },
        "date_publication": {
          "type": "string"
        },
        "disponibilte": {
          "type": "boolean"
        },
        "slug": {
          "type": "string"
        },
        "langue": {
          "type": "string"
        },
        "categorie": {
          "type": "string"
        },
        "auteur": {
          "type": "string"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "utilisateur": {
      "required": [
        "id",
        "email",
        "nom",
        "prenom",
        "date_naissance"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "confirmed": {
          "type": "boolean"
        },
        "blocked": {
          "type": "boolean"
        },
        "role": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "date_naissance": {
          "type": "datetime"
        },
        "date_inscription": {
          "type": "datetime"
        },
        "derniere_cnx": {
          "type": "datetime"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__empreints_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Empreint](#schemaempreint)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__empreints_{id}

`PUT /empreints/{id}`

Update a record

> Body parameter

```json
{
  "properties": {
    "livre": {
      "type": "string"
    },
    "utilisateur": {
      "type": "string"
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__empreints_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewEmpreint](#schemanewempreint)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "livre": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "titre": {
          "type": "string"
        },
        "resume": {
          "type": "string"
        },
        "date_publication": {
          "type": "string"
        },
        "disponibilte": {
          "type": "boolean"
        },
        "slug": {
          "type": "string"
        },
        "langue": {
          "type": "string"
        },
        "categorie": {
          "type": "string"
        },
        "auteur": {
          "type": "string"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "utilisateur": {
      "required": [
        "id",
        "email",
        "nom",
        "prenom",
        "date_naissance"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "confirmed": {
          "type": "boolean"
        },
        "blocked": {
          "type": "boolean"
        },
        "role": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "date_naissance": {
          "type": "datetime"
        },
        "date_inscription": {
          "type": "datetime"
        },
        "derniere_cnx": {
          "type": "datetime"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__empreints_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Empreint](#schemaempreint)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__empreints_{id}

`DELETE /empreints/{id}`

Delete a record

<h3 id="delete__empreints_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__empreints_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-fonctionalite">Fonctionalite</h1>

## get__fonctionalites

`GET /fonctionalites`

<h3 id="get__fonctionalites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "titre": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "image": {
        "type": "array",
        "items": {
          "required": [
            "id",
            "name",
            "hash",
            "mime",
            "size",
            "url",
            "provider"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "alternativeText": {
              "type": "string"
            },
            "caption": {
              "type": "string"
            },
            "width": {
              "type": "integer"
            },
            "height": {
              "type": "integer"
            },
            "formats": {
              "type": "object"
            },
            "hash": {
              "type": "string"
            },
            "ext": {
              "type": "string"
            },
            "mime": {
              "type": "string"
            },
            "size": {
              "type": "number"
            },
            "url": {
              "type": "string"
            },
            "previewUrl": {
              "type": "string"
            },
            "provider": {
              "type": "string"
            },
            "provider_metadata": {
              "type": "object"
            },
            "related": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "ordre": {
        "type": "integer"
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__fonctionalites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__fonctionalites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Fonctionalite](#schemafonctionalite)]|false|none|none|
|» id|string|true|none|none|
|» titre|string|false|none|none|
|» description|string|false|none|none|
|» image|[any]|false|none|none|
|»» id|string|true|none|none|
|»» name|string|true|none|none|
|»» alternativeText|string|false|none|none|
|»» caption|string|false|none|none|
|»» width|integer|false|none|none|
|»» height|integer|false|none|none|
|»» formats|object|false|none|none|
|»» hash|string|true|none|none|
|»» ext|string|false|none|none|
|»» mime|string|true|none|none|
|»» size|number|true|none|none|
|»» url|string|true|none|none|
|»» previewUrl|string|false|none|none|
|»» provider|string|true|none|none|
|»» provider_metadata|object|false|none|none|
|»» related|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» ordre|integer|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__fonctionalites

`POST /fonctionalites`

Create a new record

> Body parameter

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__fonctionalites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewFonctionalite](#schemanewfonctionalite)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__fonctionalites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Fonctionalite](#schemafonctionalite)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__fonctionalites_count

`GET /fonctionalites/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__fonctionalites_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__fonctionalites_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__fonctionalites_{id}

`GET /fonctionalites/{id}`

<h3 id="get__fonctionalites_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__fonctionalites_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Fonctionalite](#schemafonctionalite)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__fonctionalites_{id}

`PUT /fonctionalites/{id}`

Update a record

> Body parameter

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__fonctionalites_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewFonctionalite](#schemanewfonctionalite)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__fonctionalites_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Fonctionalite](#schemafonctionalite)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__fonctionalites_{id}

`DELETE /fonctionalites/{id}`

Delete a record

<h3 id="delete__fonctionalites_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__fonctionalites_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-librairie">Librairie</h1>

## get__librairies

`GET /librairies`

<h3 id="get__librairies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "nom"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "nom": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "image": {
        "type": "array",
        "items": {
          "required": [
            "id",
            "name",
            "hash",
            "mime",
            "size",
            "url",
            "provider"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "alternativeText": {
              "type": "string"
            },
            "caption": {
              "type": "string"
            },
            "width": {
              "type": "integer"
            },
            "height": {
              "type": "integer"
            },
            "formats": {
              "type": "object"
            },
            "hash": {
              "type": "string"
            },
            "ext": {
              "type": "string"
            },
            "mime": {
              "type": "string"
            },
            "size": {
              "type": "number"
            },
            "url": {
              "type": "string"
            },
            "previewUrl": {
              "type": "string"
            },
            "provider": {
              "type": "string"
            },
            "provider_metadata": {
              "type": "object"
            },
            "related": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__librairies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__librairies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Librairie](#schemalibrairie)]|false|none|none|
|» id|string|true|none|none|
|» nom|string|true|none|none|
|» description|string|false|none|none|
|» image|[any]|false|none|none|
|»» id|string|true|none|none|
|»» name|string|true|none|none|
|»» alternativeText|string|false|none|none|
|»» caption|string|false|none|none|
|»» width|integer|false|none|none|
|»» height|integer|false|none|none|
|»» formats|object|false|none|none|
|»» hash|string|true|none|none|
|»» ext|string|false|none|none|
|»» mime|string|true|none|none|
|»» size|number|true|none|none|
|»» url|string|true|none|none|
|»» previewUrl|string|false|none|none|
|»» provider|string|true|none|none|
|»» provider_metadata|object|false|none|none|
|»» related|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__librairies

`POST /librairies`

Create a new record

> Body parameter

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__librairies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewLibrairie](#schemanewlibrairie)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__librairies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Librairie](#schemalibrairie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__librairies_count

`GET /librairies/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__librairies_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__librairies_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__librairies_{id}

`GET /librairies/{id}`

<h3 id="get__librairies_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__librairies_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Librairie](#schemalibrairie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__librairies_{id}

`PUT /librairies/{id}`

Update a record

> Body parameter

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__librairies_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewLibrairie](#schemanewlibrairie)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__librairies_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Librairie](#schemalibrairie)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__librairies_{id}

`DELETE /librairies/{id}`

Delete a record

<h3 id="delete__librairies_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__librairies_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-livre">Livre</h1>

## get__livres

`GET /livres`

<h3 id="get__livres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "titre": {
        "type": "string"
      },
      "resume": {
        "type": "string"
      },
      "date_publication": {
        "type": "string"
      },
      "disponibilte": {
        "type": "boolean"
      },
      "slug": {
        "type": "string"
      },
      "langue": {
        "type": "string",
        "enum": [
          "fr",
          "ag",
          "it",
          "al"
        ]
      },
      "categorie": {
        "required": [
          "id",
          "nom"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "auteur": {
        "required": [
          "id",
          "nom",
          "prenom"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "annee_naissance": {
            "type": "integer"
          },
          "nationalite": {
            "type": "string"
          },
          "livres": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "empreint": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "livre": {
            "type": "string"
          },
          "utilisateur": {
            "type": "string"
          },
          "date_empreint": {
            "type": "datetime"
          },
          "date_retour": {
            "type": "datetime"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__livres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__livres-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Livre](#schemalivre)]|false|none|none|
|» id|string|true|none|none|
|» titre|string|false|none|none|
|» resume|string|false|none|none|
|» date_publication|string|false|none|none|
|» disponibilte|boolean|false|none|none|
|» slug|string|false|none|none|
|» langue|string|false|none|none|
|» categorie|object|false|none|none|
|»» id|string|true|none|none|
|»» nom|string|true|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» auteur|object|false|none|none|
|»» id|string|true|none|none|
|»» nom|string|true|none|none|
|»» prenom|string|true|none|none|
|»» annee_naissance|integer|false|none|none|
|»» nationalite|string|false|none|none|
|»» livres|[string]|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» empreint|object|false|none|none|
|»» id|string|true|none|none|
|»» livre|string|false|none|none|
|»» utilisateur|string|false|none|none|
|»» date_empreint|datetime|false|none|none|
|»» date_retour|datetime|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|langue|fr|
|langue|ag|
|langue|it|
|langue|al|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__livres

`POST /livres`

Create a new record

> Body parameter

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "type": "string"
    },
    "auteur": {
      "type": "string"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__livres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewLivre](#schemanewlivre)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "required": [
        "id",
        "nom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "auteur": {
      "required": [
        "id",
        "nom",
        "prenom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "annee_naissance": {
          "type": "integer"
        },
        "nationalite": {
          "type": "string"
        },
        "livres": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__livres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Livre](#schemalivre)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__livres_count

`GET /livres/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__livres_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__livres_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__livres_{id}

`GET /livres/{id}`

<h3 id="get__livres_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "required": [
        "id",
        "nom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "auteur": {
      "required": [
        "id",
        "nom",
        "prenom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "annee_naissance": {
          "type": "integer"
        },
        "nationalite": {
          "type": "string"
        },
        "livres": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__livres_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Livre](#schemalivre)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__livres_{id}

`PUT /livres/{id}`

Update a record

> Body parameter

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "type": "string"
    },
    "auteur": {
      "type": "string"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__livres_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewLivre](#schemanewlivre)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "required": [
        "id",
        "nom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "auteur": {
      "required": [
        "id",
        "nom",
        "prenom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "annee_naissance": {
          "type": "integer"
        },
        "nationalite": {
          "type": "string"
        },
        "livres": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__livres_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Livre](#schemalivre)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__livres_{id}

`DELETE /livres/{id}`

Delete a record

<h3 id="delete__livres_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__livres_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-social">Social</h1>

## get__socials

`GET /socials`

<h3 id="get__socials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "lien": {
        "type": "string"
      },
      "reseau": {
        "type": "string"
      },
      "icon": {
        "type": "array",
        "items": {
          "required": [
            "id",
            "name",
            "hash",
            "mime",
            "size",
            "url",
            "provider"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "alternativeText": {
              "type": "string"
            },
            "caption": {
              "type": "string"
            },
            "width": {
              "type": "integer"
            },
            "height": {
              "type": "integer"
            },
            "formats": {
              "type": "object"
            },
            "hash": {
              "type": "string"
            },
            "ext": {
              "type": "string"
            },
            "mime": {
              "type": "string"
            },
            "size": {
              "type": "number"
            },
            "url": {
              "type": "string"
            },
            "previewUrl": {
              "type": "string"
            },
            "provider": {
              "type": "string"
            },
            "provider_metadata": {
              "type": "object"
            },
            "related": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__socials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__socials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Social](#schemasocial)]|false|none|none|
|» id|string|true|none|none|
|» lien|string|false|none|none|
|» reseau|string|false|none|none|
|» icon|[any]|false|none|none|
|»» id|string|true|none|none|
|»» name|string|true|none|none|
|»» alternativeText|string|false|none|none|
|»» caption|string|false|none|none|
|»» width|integer|false|none|none|
|»» height|integer|false|none|none|
|»» formats|object|false|none|none|
|»» hash|string|true|none|none|
|»» ext|string|false|none|none|
|»» mime|string|true|none|none|
|»» size|number|true|none|none|
|»» url|string|true|none|none|
|»» previewUrl|string|false|none|none|
|»» provider|string|true|none|none|
|»» provider_metadata|object|false|none|none|
|»» related|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__socials

`POST /socials`

Create a new record

> Body parameter

```json
{
  "properties": {
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__socials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewSocial](#schemanewsocial)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "icon": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__socials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Social](#schemasocial)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__socials_count

`GET /socials/count`

> Example responses

> 200 Response

```json
{
  "properties": {
    "count": {
      "type": "integer"
    }
  }
}
```

<h3 id="get__socials_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__socials_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__socials_{id}

`GET /socials/{id}`

<h3 id="get__socials_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "icon": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__socials_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Social](#schemasocial)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__socials_{id}

`PUT /socials/{id}`

Update a record

> Body parameter

```json
{
  "properties": {
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__socials_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewSocial](#schemanewsocial)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "icon": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__socials_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[Social](#schemasocial)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__socials_{id}

`DELETE /socials/{id}`

Delete a record

<h3 id="delete__socials_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "integer",
  "format": "int64"
}
```

<h3 id="delete__socials_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|deletes a single record based on the ID supplied|integer|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-email-email">Email - Email</h1>

## post__email_

`POST /email/`

Send an email

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__email_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__email_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__email_-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-upload-file">Upload - File</h1>

## post__upload_

`POST /upload/`

Upload a file

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__upload_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__upload_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__upload_-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__upload_files_count

`GET /upload/files/count`

Retrieve the total number of uploaded files

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__upload_files_count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__upload_files_count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__upload_files

`GET /upload/files`

Retrieve all file documents

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__upload_files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__upload_files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__upload_files_{id}

`GET /upload/files/{id}`

Retrieve a single file depending on its id

<h3 id="get__upload_files_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__upload_files_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__upload_files_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__upload_files_{id}

`DELETE /upload/files/{id}`

Delete an uploaded file

<h3 id="delete__upload_files_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="delete__upload_files_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="delete__upload_files_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__upload_search_{id}

`GET /upload/search/{id}`

Search for an uploaded file

<h3 id="get__upload_search_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__upload_search_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__upload_search_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-userspermissions-role">UsersPermissions - Role</h1>

## get__users-permissions_roles_{id}

`GET /users-permissions/roles/{id}`

Retrieve a role depending on its id

<h3 id="get__users-permissions_roles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "type",
          "controller",
          "action",
          "enabled"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "controller": {
            "type": "string"
          },
          "action": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "policy": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "users": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "email",
          "nom",
          "prenom",
          "date_naissance"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "confirmed": {
            "type": "boolean"
          },
          "blocked": {
            "type": "boolean"
          },
          "role": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "date_naissance": {
            "type": "datetime"
          },
          "date_inscription": {
            "type": "datetime"
          },
          "derniere_cnx": {
            "type": "datetime"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__users-permissions_roles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsRole](#schemauserspermissionsrole)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__users-permissions_roles

`GET /users-permissions/roles`

Retrieve all role documents

<h3 id="get__users-permissions_roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "name"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string",
        "minLength": 3
      },
      "description": {
        "type": "string"
      },
      "type": {
        "type": "string"
      },
      "permissions": {
        "type": "array",
        "items": {
          "required": [
            "id",
            "type",
            "controller",
            "action",
            "enabled"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "controller": {
              "type": "string"
            },
            "action": {
              "type": "string"
            },
            "enabled": {
              "type": "boolean"
            },
            "policy": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "users": {
        "type": "array",
        "items": {
          "required": [
            "id",
            "email",
            "nom",
            "prenom",
            "date_naissance"
          ],
          "properties": {
            "id": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "provider": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "resetPasswordToken": {
              "type": "string"
            },
            "confirmed": {
              "type": "boolean"
            },
            "blocked": {
              "type": "boolean"
            },
            "role": {
              "type": "string"
            },
            "nom": {
              "type": "string"
            },
            "prenom": {
              "type": "string"
            },
            "date_naissance": {
              "type": "datetime"
            },
            "date_inscription": {
              "type": "datetime"
            },
            "derniere_cnx": {
              "type": "datetime"
            },
            "empreint": {
              "type": "string"
            },
            "created_by": {
              "type": "string"
            },
            "updated_by": {
              "type": "string"
            }
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__users-permissions_roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__users-permissions_roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsersPermissionsRole](#schemauserspermissionsrole)]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» description|string|false|none|none|
|» type|string|false|none|none|
|» permissions|[any]|false|none|none|
|»» id|string|true|none|none|
|»» type|string|true|none|none|
|»» controller|string|true|none|none|
|»» action|string|true|none|none|
|»» enabled|boolean|true|none|none|
|»» policy|string|false|none|none|
|»» role|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» users|[any]|false|none|none|
|»» id|string|true|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» provider|string|false|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» confirmed|boolean|false|none|none|
|»» blocked|boolean|false|none|none|
|»» role|string|false|none|none|
|»» nom|string|true|none|none|
|»» prenom|string|true|none|none|
|»» date_naissance|datetime|true|none|none|
|»» date_inscription|datetime|false|none|none|
|»» derniere_cnx|datetime|false|none|none|
|»» empreint|string|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__users-permissions_roles

`POST /users-permissions/roles`

Create a new role

> Body parameter

```json
{
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "users": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__users-permissions_roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewUsersPermissionsRole](#schemanewuserspermissionsrole)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "type",
          "controller",
          "action",
          "enabled"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "controller": {
            "type": "string"
          },
          "action": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "policy": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "users": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "email",
          "nom",
          "prenom",
          "date_naissance"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "confirmed": {
            "type": "boolean"
          },
          "blocked": {
            "type": "boolean"
          },
          "role": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "date_naissance": {
            "type": "datetime"
          },
          "date_inscription": {
            "type": "datetime"
          },
          "derniere_cnx": {
            "type": "datetime"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__users-permissions_roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsRole](#schemauserspermissionsrole)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__users-permissions_roles_{role}

`PUT /users-permissions/roles/{role}`

Update a role

> Body parameter

```json
{
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "users": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__users-permissions_roles_{role}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|path|string|true|none|
|body|body|[NewUsersPermissionsRole](#schemanewuserspermissionsrole)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "type",
          "controller",
          "action",
          "enabled"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "controller": {
            "type": "string"
          },
          "action": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "policy": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "users": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "email",
          "nom",
          "prenom",
          "date_naissance"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "confirmed": {
            "type": "boolean"
          },
          "blocked": {
            "type": "boolean"
          },
          "role": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "date_naissance": {
            "type": "datetime"
          },
          "date_inscription": {
            "type": "datetime"
          },
          "derniere_cnx": {
            "type": "datetime"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__users-permissions_roles_{role}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsRole](#schemauserspermissionsrole)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__users-permissions_roles_{role}

`DELETE /users-permissions/roles/{role}`

Delete a role

<h3 id="delete__users-permissions_roles_{role}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="delete__users-permissions_roles_{role}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="delete__users-permissions_roles_{role}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="documentation-userspermissions-user">UsersPermissions - User</h1>

## get__users-permissions_search_{id}

`GET /users-permissions/search/{id}`

Search for users

<h3 id="get__users-permissions_search_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "email",
      "nom",
      "prenom",
      "date_naissance"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "username": {
        "type": "string",
        "minLength": 3
      },
      "email": {
        "type": "string",
        "minLength": 6
      },
      "provider": {
        "type": "string"
      },
      "confirmed": {
        "type": "boolean",
        "default": true
      },
      "blocked": {
        "type": "boolean",
        "default": false
      },
      "role": {
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "users": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "nom": {
        "type": "string"
      },
      "prenom": {
        "type": "string"
      },
      "date_naissance": {
        "type": "datetime"
      },
      "date_inscription": {
        "type": "datetime"
      },
      "derniere_cnx": {
        "type": "datetime"
      },
      "empreint": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "livre": {
            "type": "string"
          },
          "utilisateur": {
            "type": "string"
          },
          "date_empreint": {
            "type": "datetime"
          },
          "date_retour": {
            "type": "datetime"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__users-permissions_search_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__users-permissions_search_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsersPermissionsUser](#schemauserspermissionsuser)]|false|none|none|
|» id|string|true|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» provider|string|false|none|none|
|» confirmed|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» role|object|false|none|none|
|»» id|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|false|none|none|
|»» type|string|false|none|none|
|»» permissions|[string]|false|none|none|
|»» users|[string]|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» date_naissance|datetime|true|none|none|
|» date_inscription|datetime|false|none|none|
|» derniere_cnx|datetime|false|none|none|
|» empreint|object|false|none|none|
|»» id|string|true|none|none|
|»» livre|string|false|none|none|
|»» utilisateur|string|false|none|none|
|»» date_empreint|datetime|false|none|none|
|»» date_retour|datetime|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__connect_*

`GET /connect/*`

Connect a provider

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__connect_*-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__connect_*-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auth_local

`POST /auth/local`

Login a user using the identifiers email and password

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_local-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_local-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__auth_local-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auth_local_register

`POST /auth/local/register`

Register a new user with the default role

> Body parameter

```json
{
  "required": [
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "password": {
      "type": "string",
      "minLength": 6
    },
    "resetPasswordToken": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_local_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewUsersPermissionsUser](#schemanewuserspermissionsuser)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "users": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="post__auth_local_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsUser](#schemauserspermissionsuser)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__auth_{provider}_callback

`GET /auth/{provider}/callback`

Successfull redirection after approving a provider

<h3 id="get__auth_{provider}_callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__auth_{provider}_callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__auth_{provider}_callback-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auth_forgot-password

`POST /auth/forgot-password`

Send the reset password email link

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_forgot-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_forgot-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__auth_forgot-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auth_reset-password

`POST /auth/reset-password`

Reset user password with a code (resetToken)

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__auth_reset-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__auth_email-confirmation

`GET /auth/email-confirmation`

Validate a user account

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="get__auth_email-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__auth_email-confirmation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post__auth_send-email-confirmation

`POST /auth/send-email-confirmation`

Send a confirmation email to user

> Body parameter

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_send-email-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="post__auth_send-email-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="post__auth_send-email-confirmation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__users

`GET /users`

Retrieve all user documents

<h3 id="get__users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_limit|query|integer|false|Maximum number of results possible|
|_sort|query|string|false|Sort according to a specific field.|
|_start|query|integer|false|Skip a specific number of entries (especially useful for pagination)|
|=|query|string|false|Get entries that matches exactly your input|
|_ne|query|string|false|Get records that are not equals to something|
|_lt|query|string|false|Get record that are lower than a value|
|_lte|query|string|false|Get records that are lower than or equal to a value|
|_gt|query|string|false|Get records that are greater than a value|
|_gte|query|string|false|Get records that are greater than  or equal a value|
|_contains|query|string|false|Get records that contains a value|
|_containss|query|string|false|Get records that contains (case sensitive) a value|
|_in|query|array[string]|false|Get records that matches any value in the array of values|
|_nin|query|array[string]|false|Get records that doesn't match any value in the array of values|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "required": [
      "id",
      "email",
      "nom",
      "prenom",
      "date_naissance"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "username": {
        "type": "string",
        "minLength": 3
      },
      "email": {
        "type": "string",
        "minLength": 6
      },
      "provider": {
        "type": "string"
      },
      "confirmed": {
        "type": "boolean",
        "default": true
      },
      "blocked": {
        "type": "boolean",
        "default": false
      },
      "role": {
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "users": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "nom": {
        "type": "string"
      },
      "prenom": {
        "type": "string"
      },
      "date_naissance": {
        "type": "datetime"
      },
      "date_inscription": {
        "type": "datetime"
      },
      "derniere_cnx": {
        "type": "datetime"
      },
      "empreint": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "livre": {
            "type": "string"
          },
          "utilisateur": {
            "type": "string"
          },
          "date_empreint": {
            "type": "datetime"
          },
          "date_retour": {
            "type": "datetime"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      },
      "created_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      },
      "updated_by": {
        "required": [
          "id",
          "email"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "registrationToken": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```

<h3 id="get__users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="get__users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsersPermissionsUser](#schemauserspermissionsuser)]|false|none|none|
|» id|string|true|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» provider|string|false|none|none|
|» confirmed|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» role|object|false|none|none|
|»» id|string|true|none|none|
|»» name|string|true|none|none|
|»» description|string|false|none|none|
|»» type|string|false|none|none|
|»» permissions|[string]|false|none|none|
|»» users|[string]|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» date_naissance|datetime|true|none|none|
|» date_inscription|datetime|false|none|none|
|» derniere_cnx|datetime|false|none|none|
|» empreint|object|false|none|none|
|»» id|string|true|none|none|
|»» livre|string|false|none|none|
|»» utilisateur|string|false|none|none|
|»» date_empreint|datetime|false|none|none|
|»» date_retour|datetime|false|none|none|
|»» created_by|string|false|none|none|
|»» updated_by|string|false|none|none|
|» created_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|
|» updated_by|object|false|none|none|
|»» id|string|true|none|none|
|»» firstname|string|false|none|none|
|»» lastname|string|false|none|none|
|»» username|string|false|none|none|
|»» email|string|true|none|none|
|»» password|string|false|none|none|
|»» resetPasswordToken|string|false|none|none|
|»» registrationToken|string|false|none|none|
|»» isActive|boolean|false|none|none|
|»» roles|[string]|false|none|none|
|»» blocked|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__users_me

`GET /users/me`

Retrieve the logged in user information

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "users": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__users_me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsUser](#schemauserspermissionsuser)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get__users_{id}

`GET /users/{id}`

Retrieve a single user depending on his id

<h3 id="get__users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "users": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="get__users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsUser](#schemauserspermissionsuser)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put__users_{id}

`PUT /users/{id}`

Update an existing user

> Body parameter

```json
{
  "required": [
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "password": {
      "type": "string",
      "minLength": 6
    },
    "resetPasswordToken": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}
```

<h3 id="put__users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NewUsersPermissionsUser](#schemanewuserspermissionsuser)|true|none|

> Example responses

> 200 Response

```json
{
  "required": [
    "id",
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "users": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}
```

<h3 id="put__users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|[UsersPermissionsUser](#schemauserspermissionsuser)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete__users_{id}

`DELETE /users/{id}`

Delete an existing user

<h3 id="delete__users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "properties": {
    "foo": {
      "type": "string"
    }
  }
}
```

<h3 id="delete__users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|response|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|[Error](#schemaerror)|
|default|Default|unexpected error|[Error](#schemaerror)|

<h3 id="delete__users_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» foo|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_Auteur">Auteur</h2>
<!-- backwards compatibility -->
<a id="schemaauteur"></a>
<a id="schema_Auteur"></a>
<a id="tocSauteur"></a>
<a id="tocsauteur"></a>

```json
{
  "required": [
    "id",
    "nom",
    "prenom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "required": [
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "titre": {
            "type": "string"
          },
          "resume": {
            "type": "string"
          },
          "date_publication": {
            "type": "string"
          },
          "disponibilte": {
            "type": "boolean"
          },
          "slug": {
            "type": "string"
          },
          "langue": {
            "type": "string"
          },
          "categorie": {
            "type": "string"
          },
          "auteur": {
            "type": "string"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|nom|string|true|none|none|
|prenom|string|true|none|none|
|annee_naissance|integer|false|none|none|
|nationalite|string|false|none|none|
|livres|[any]|false|none|none|
|» id|string|true|none|none|
|» titre|string|false|none|none|
|» resume|string|false|none|none|
|» date_publication|string|false|none|none|
|» disponibilte|boolean|false|none|none|
|» slug|string|false|none|none|
|» langue|string|false|none|none|
|» categorie|string|false|none|none|
|» auteur|string|false|none|none|
|» empreint|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewAuteur">NewAuteur</h2>
<!-- backwards compatibility -->
<a id="schemanewauteur"></a>
<a id="schema_NewAuteur"></a>
<a id="tocSnewauteur"></a>
<a id="tocsnewauteur"></a>

```json
{
  "required": [
    "nom",
    "prenom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "annee_naissance": {
      "type": "integer"
    },
    "nationalite": {
      "type": "string"
    },
    "livres": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nom|string|true|none|none|
|prenom|string|true|none|none|
|annee_naissance|integer|false|none|none|
|nationalite|string|false|none|none|
|livres|[string]|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Categorie">Categorie</h2>
<!-- backwards compatibility -->
<a id="schemacategorie"></a>
<a id="schema_Categorie"></a>
<a id="tocScategorie"></a>
<a id="tocscategorie"></a>

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|nom|string|true|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewCategorie">NewCategorie</h2>
<!-- backwards compatibility -->
<a id="schemanewcategorie"></a>
<a id="schema_NewCategorie"></a>
<a id="tocSnewcategorie"></a>
<a id="tocsnewcategorie"></a>

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nom|string|true|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Empreint">Empreint</h2>
<!-- backwards compatibility -->
<a id="schemaempreint"></a>
<a id="schema_Empreint"></a>
<a id="tocSempreint"></a>
<a id="tocsempreint"></a>

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "livre": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "titre": {
          "type": "string"
        },
        "resume": {
          "type": "string"
        },
        "date_publication": {
          "type": "string"
        },
        "disponibilte": {
          "type": "boolean"
        },
        "slug": {
          "type": "string"
        },
        "langue": {
          "type": "string"
        },
        "categorie": {
          "type": "string"
        },
        "auteur": {
          "type": "string"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "utilisateur": {
      "required": [
        "id",
        "email",
        "nom",
        "prenom",
        "date_naissance"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "confirmed": {
          "type": "boolean"
        },
        "blocked": {
          "type": "boolean"
        },
        "role": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "date_naissance": {
          "type": "datetime"
        },
        "date_inscription": {
          "type": "datetime"
        },
        "derniere_cnx": {
          "type": "datetime"
        },
        "empreint": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|livre|object|false|none|none|
|» id|string|true|none|none|
|» titre|string|false|none|none|
|» resume|string|false|none|none|
|» date_publication|string|false|none|none|
|» disponibilte|boolean|false|none|none|
|» slug|string|false|none|none|
|» langue|string|false|none|none|
|» categorie|string|false|none|none|
|» auteur|string|false|none|none|
|» empreint|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|utilisateur|object|false|none|none|
|» id|string|true|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» provider|string|false|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» confirmed|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» role|string|false|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» date_naissance|datetime|true|none|none|
|» date_inscription|datetime|false|none|none|
|» derniere_cnx|datetime|false|none|none|
|» empreint|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|date_empreint|datetime|false|none|none|
|date_retour|datetime|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewEmpreint">NewEmpreint</h2>
<!-- backwards compatibility -->
<a id="schemanewempreint"></a>
<a id="schema_NewEmpreint"></a>
<a id="tocSnewempreint"></a>
<a id="tocsnewempreint"></a>

```json
{
  "properties": {
    "livre": {
      "type": "string"
    },
    "utilisateur": {
      "type": "string"
    },
    "date_empreint": {
      "type": "datetime"
    },
    "date_retour": {
      "type": "datetime"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|livre|string|false|none|none|
|utilisateur|string|false|none|none|
|date_empreint|datetime|false|none|none|
|date_retour|datetime|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Fonctionalite">Fonctionalite</h2>
<!-- backwards compatibility -->
<a id="schemafonctionalite"></a>
<a id="schema_Fonctionalite"></a>
<a id="tocSfonctionalite"></a>
<a id="tocsfonctionalite"></a>

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|titre|string|false|none|none|
|description|string|false|none|none|
|image|[any]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» alternativeText|string|false|none|none|
|» caption|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» formats|object|false|none|none|
|» hash|string|true|none|none|
|» ext|string|false|none|none|
|» mime|string|true|none|none|
|» size|number|true|none|none|
|» url|string|true|none|none|
|» previewUrl|string|false|none|none|
|» provider|string|true|none|none|
|» provider_metadata|object|false|none|none|
|» related|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|ordre|integer|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewFonctionalite">NewFonctionalite</h2>
<!-- backwards compatibility -->
<a id="schemanewfonctionalite"></a>
<a id="schema_NewFonctionalite"></a>
<a id="tocSnewfonctionalite"></a>
<a id="tocsnewfonctionalite"></a>

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "ordre": {
      "type": "integer"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|titre|string|false|none|none|
|description|string|false|none|none|
|ordre|integer|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Librairie">Librairie</h2>
<!-- backwards compatibility -->
<a id="schemalibrairie"></a>
<a id="schema_Librairie"></a>
<a id="tocSlibrairie"></a>
<a id="tocslibrairie"></a>

```json
{
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|nom|string|true|none|none|
|description|string|false|none|none|
|image|[any]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» alternativeText|string|false|none|none|
|» caption|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» formats|object|false|none|none|
|» hash|string|true|none|none|
|» ext|string|false|none|none|
|» mime|string|true|none|none|
|» size|number|true|none|none|
|» url|string|true|none|none|
|» previewUrl|string|false|none|none|
|» provider|string|true|none|none|
|» provider_metadata|object|false|none|none|
|» related|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewLibrairie">NewLibrairie</h2>
<!-- backwards compatibility -->
<a id="schemanewlibrairie"></a>
<a id="schema_NewLibrairie"></a>
<a id="tocSnewlibrairie"></a>
<a id="tocsnewlibrairie"></a>

```json
{
  "required": [
    "nom"
  ],
  "properties": {
    "nom": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nom|string|true|none|none|
|description|string|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Livre">Livre</h2>
<!-- backwards compatibility -->
<a id="schemalivre"></a>
<a id="schema_Livre"></a>
<a id="tocSlivre"></a>
<a id="tocslivre"></a>

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "required": [
        "id",
        "nom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "auteur": {
      "required": [
        "id",
        "nom",
        "prenom"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "prenom": {
          "type": "string"
        },
        "annee_naissance": {
          "type": "integer"
        },
        "nationalite": {
          "type": "string"
        },
        "livres": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|titre|string|false|none|none|
|resume|string|false|none|none|
|date_publication|string|false|none|none|
|disponibilte|boolean|false|none|none|
|slug|string|false|none|none|
|langue|string|false|none|none|
|categorie|object|false|none|none|
|» id|string|true|none|none|
|» nom|string|true|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|auteur|object|false|none|none|
|» id|string|true|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» annee_naissance|integer|false|none|none|
|» nationalite|string|false|none|none|
|» livres|[string]|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|empreint|object|false|none|none|
|» id|string|true|none|none|
|» livre|string|false|none|none|
|» utilisateur|string|false|none|none|
|» date_empreint|datetime|false|none|none|
|» date_retour|datetime|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|langue|fr|
|langue|ag|
|langue|it|
|langue|al|

<h2 id="tocS_NewLivre">NewLivre</h2>
<!-- backwards compatibility -->
<a id="schemanewlivre"></a>
<a id="schema_NewLivre"></a>
<a id="tocSnewlivre"></a>
<a id="tocsnewlivre"></a>

```json
{
  "properties": {
    "titre": {
      "type": "string"
    },
    "resume": {
      "type": "string"
    },
    "date_publication": {
      "type": "string"
    },
    "disponibilte": {
      "type": "boolean"
    },
    "slug": {
      "type": "string"
    },
    "langue": {
      "type": "string",
      "enum": [
        "fr",
        "ag",
        "it",
        "al"
      ]
    },
    "categorie": {
      "type": "string"
    },
    "auteur": {
      "type": "string"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|titre|string|false|none|none|
|resume|string|false|none|none|
|date_publication|string|false|none|none|
|disponibilte|boolean|false|none|none|
|slug|string|false|none|none|
|langue|string|false|none|none|
|categorie|string|false|none|none|
|auteur|string|false|none|none|
|empreint|string|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|langue|fr|
|langue|ag|
|langue|it|
|langue|al|

<h2 id="tocS_Social">Social</h2>
<!-- backwards compatibility -->
<a id="schemasocial"></a>
<a id="schema_Social"></a>
<a id="tocSsocial"></a>
<a id="tocssocial"></a>

```json
{
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "icon": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "hash",
          "mime",
          "size",
          "url",
          "provider"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "alternativeText": {
            "type": "string"
          },
          "caption": {
            "type": "string"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "formats": {
            "type": "object"
          },
          "hash": {
            "type": "string"
          },
          "ext": {
            "type": "string"
          },
          "mime": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "url": {
            "type": "string"
          },
          "previewUrl": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "provider_metadata": {
            "type": "object"
          },
          "related": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|lien|string|false|none|none|
|reseau|string|false|none|none|
|icon|[any]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» alternativeText|string|false|none|none|
|» caption|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» formats|object|false|none|none|
|» hash|string|true|none|none|
|» ext|string|false|none|none|
|» mime|string|true|none|none|
|» size|number|true|none|none|
|» url|string|true|none|none|
|» previewUrl|string|false|none|none|
|» provider|string|true|none|none|
|» provider_metadata|object|false|none|none|
|» related|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewSocial">NewSocial</h2>
<!-- backwards compatibility -->
<a id="schemanewsocial"></a>
<a id="schema_NewSocial"></a>
<a id="tocSnewsocial"></a>
<a id="tocsnewsocial"></a>

```json
{
  "properties": {
    "lien": {
      "type": "string"
    },
    "reseau": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lien|string|false|none|none|
|reseau|string|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_UsersPermissionsRole">UsersPermissionsRole</h2>
<!-- backwards compatibility -->
<a id="schemauserspermissionsrole"></a>
<a id="schema_UsersPermissionsRole"></a>
<a id="tocSuserspermissionsrole"></a>
<a id="tocsuserspermissionsrole"></a>

```json
{
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "type",
          "controller",
          "action",
          "enabled"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "controller": {
            "type": "string"
          },
          "action": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "policy": {
            "type": "string"
          },
          "role": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "users": {
      "type": "array",
      "items": {
        "required": [
          "id",
          "email",
          "nom",
          "prenom",
          "date_naissance"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "provider": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "resetPasswordToken": {
            "type": "string"
          },
          "confirmed": {
            "type": "boolean"
          },
          "blocked": {
            "type": "boolean"
          },
          "role": {
            "type": "string"
          },
          "nom": {
            "type": "string"
          },
          "prenom": {
            "type": "string"
          },
          "date_naissance": {
            "type": "datetime"
          },
          "date_inscription": {
            "type": "datetime"
          },
          "derniere_cnx": {
            "type": "datetime"
          },
          "empreint": {
            "type": "string"
          },
          "created_by": {
            "type": "string"
          },
          "updated_by": {
            "type": "string"
          }
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string|false|none|none|
|type|string|false|none|none|
|permissions|[any]|false|none|none|
|» id|string|true|none|none|
|» type|string|true|none|none|
|» controller|string|true|none|none|
|» action|string|true|none|none|
|» enabled|boolean|true|none|none|
|» policy|string|false|none|none|
|» role|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|users|[any]|false|none|none|
|» id|string|true|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» provider|string|false|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» confirmed|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» role|string|false|none|none|
|» nom|string|true|none|none|
|» prenom|string|true|none|none|
|» date_naissance|datetime|true|none|none|
|» date_inscription|datetime|false|none|none|
|» derniere_cnx|datetime|false|none|none|
|» empreint|string|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewUsersPermissionsRole">NewUsersPermissionsRole</h2>
<!-- backwards compatibility -->
<a id="schemanewuserspermissionsrole"></a>
<a id="schema_NewUsersPermissionsRole"></a>
<a id="tocSnewuserspermissionsrole"></a>
<a id="tocsnewuserspermissionsrole"></a>

```json
{
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 3
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "permissions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "users": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|type|string|false|none|none|
|permissions|[string]|false|none|none|
|users|[string]|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_UsersPermissionsUser">UsersPermissionsUser</h2>
<!-- backwards compatibility -->
<a id="schemauserspermissionsuser"></a>
<a id="schema_UsersPermissionsUser"></a>
<a id="tocSuserspermissionsuser"></a>
<a id="tocsuserspermissionsuser"></a>

```json
{
  "required": [
    "id",
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "permissions": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "users": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "livre": {
          "type": "string"
        },
        "utilisateur": {
          "type": "string"
        },
        "date_empreint": {
          "type": "datetime"
        },
        "date_retour": {
          "type": "datetime"
        },
        "created_by": {
          "type": "string"
        },
        "updated_by": {
          "type": "string"
        }
      }
    },
    "created_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    },
    "updated_by": {
      "required": [
        "id",
        "email"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "resetPasswordToken": {
          "type": "string"
        },
        "registrationToken": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blocked": {
          "type": "boolean"
        }
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|username|string|false|none|none|
|email|string|true|none|none|
|provider|string|false|none|none|
|confirmed|boolean|false|none|none|
|blocked|boolean|false|none|none|
|role|object|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» description|string|false|none|none|
|» type|string|false|none|none|
|» permissions|[string]|false|none|none|
|» users|[string]|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|nom|string|true|none|none|
|prenom|string|true|none|none|
|date_naissance|datetime|true|none|none|
|date_inscription|datetime|false|none|none|
|derniere_cnx|datetime|false|none|none|
|empreint|object|false|none|none|
|» id|string|true|none|none|
|» livre|string|false|none|none|
|» utilisateur|string|false|none|none|
|» date_empreint|datetime|false|none|none|
|» date_retour|datetime|false|none|none|
|» created_by|string|false|none|none|
|» updated_by|string|false|none|none|
|created_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|
|updated_by|object|false|none|none|
|» id|string|true|none|none|
|» firstname|string|false|none|none|
|» lastname|string|false|none|none|
|» username|string|false|none|none|
|» email|string|true|none|none|
|» password|string|false|none|none|
|» resetPasswordToken|string|false|none|none|
|» registrationToken|string|false|none|none|
|» isActive|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» blocked|boolean|false|none|none|

<h2 id="tocS_NewUsersPermissionsUser">NewUsersPermissionsUser</h2>
<!-- backwards compatibility -->
<a id="schemanewuserspermissionsuser"></a>
<a id="schema_NewUsersPermissionsUser"></a>
<a id="tocSnewuserspermissionsuser"></a>
<a id="tocsnewuserspermissionsuser"></a>

```json
{
  "required": [
    "email",
    "nom",
    "prenom",
    "date_naissance"
  ],
  "properties": {
    "username": {
      "type": "string",
      "minLength": 3
    },
    "email": {
      "type": "string",
      "minLength": 6
    },
    "provider": {
      "type": "string"
    },
    "password": {
      "type": "string",
      "minLength": 6
    },
    "resetPasswordToken": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "default": true
    },
    "blocked": {
      "type": "boolean",
      "default": false
    },
    "role": {
      "type": "string"
    },
    "nom": {
      "type": "string"
    },
    "prenom": {
      "type": "string"
    },
    "date_naissance": {
      "type": "datetime"
    },
    "date_inscription": {
      "type": "datetime"
    },
    "derniere_cnx": {
      "type": "datetime"
    },
    "empreint": {
      "type": "string"
    },
    "created_by": {
      "type": "string"
    },
    "updated_by": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|email|string|true|none|none|
|provider|string|false|none|none|
|password|string|false|none|none|
|resetPasswordToken|string|false|none|none|
|confirmed|boolean|false|none|none|
|blocked|boolean|false|none|none|
|role|string|false|none|none|
|nom|string|true|none|none|
|prenom|string|true|none|none|
|date_naissance|datetime|true|none|none|
|date_inscription|datetime|false|none|none|
|derniere_cnx|datetime|false|none|none|
|empreint|string|false|none|none|
|created_by|string|false|none|none|
|updated_by|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "required": [
    "code",
    "message"
  ],
  "properties": {
    "code": {
      "type": "integer",
      "format": "int32"
    },
    "message": {
      "type": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

