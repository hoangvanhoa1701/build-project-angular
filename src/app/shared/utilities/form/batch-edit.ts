export function initFormlyBatchEdit(): any {
  return [
    /*Temporary Register Flag*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check1',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '仮登録フラグ'
          }
        },
        {
          template: 'XXXXXXXX',
          className: 'text'
        },
        {
          className: 'label-replace'
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              className: 'replace-before'
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    /*Published Date*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check2',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '掲載日'
          }
        },
        {
          template: '',
          className: 'text'
        },
        {
          className: 'label-replace'
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              className: 'replace-before'
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    /*Shooting Date*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check3',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '撮影日',
            nzIndeterminate: true
          }
        },
        {
          template: '',
          className: 'text'
        },
        {
          className: 'label-replace'
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              className: 'replace-before'
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    /*Temporary headline*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      templateOptions: {
        label: '本社 / 地域'
      },
      fieldGroup: [
        {
          key: 'check4',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '仮見出し'
          }
        },
        {
          template: 'disableddddddddd',
          className: 'text',
        },
        {
          key: 'check5',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check4',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-1',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                value: 'YYYY'
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check5',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-2',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                value: 'ZZZZ'
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check5',
              },
            }
          ]
        }
      ]
    },

    /*Shooting Location*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      templateOptions: {
        label: '本社 / 地域'
      },
      fieldGroup: [
        {
          key: 'check6',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '撮影場所'
          }
        },
        {
          template: 'XXXXXXX',
          className: 'text'
        },
        {
          key: 'check7',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check6',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-3',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check7',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-4',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check7',
              },
            }
          ]
        }
      ]
    },

    /*Photographer*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      templateOptions: {
        label: '本社 / 地域'
      },
      fieldGroup: [
        {
          key: 'check8',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '撮影者'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check9',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check8',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-5',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check9',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-6',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check9',
              },
            }
          ]
        }
      ]
    },

    /**/
    {
      template: '<div class="range-field"></div>',
    },

    /*photo explanation*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check10',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '写真説明'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check11',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check10',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-7',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check11',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-8',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check11',
              },
            }
          ]
        }
      ]
    },

    /*Tokyo image Solving*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check12',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '東京絵解き'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check13',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check12',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-9',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check13',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-10',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check13',
              },
            }
          ]
        }
      ]
    },

    /*Osaka image Solving*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check14',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '大阪絵解き'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check15',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check14',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-11',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check15',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-12',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check15',
              },
            }
          ]
        }
      ]
    },

    /*News Agency original image explanation*/
    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check15',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '通信社オリジナル写真説明'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check16',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check15',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-13',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check16',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-14',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check16',
              },
            }
          ]
        }
      ]
    },

    /**/
    {
      template: '<div class="range-field"></div>',
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check17',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '発信者'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check18',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check17',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-16',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check18',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-17',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check18',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check19',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '出稿宛先会社'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check20',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check19',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-18',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check20',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-19',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check20',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check21',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '出稿宛先部'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'key2',
          className: 'label-replace',
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-20',
              className: 'replace-before',
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              key: 'replace-21',
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check22',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: 'ジャンル'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'key2',
          className: 'label-replace',
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-22',
              className: 'replace-before',
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              key: 'replace-23',
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check23',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '記事種目'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check24',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check23',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-24',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check24',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-25',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check24',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check25',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: 'ラベル'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check26',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check25',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-26',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check26',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-27',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check26',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check27',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '出稿者'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'key2',
          className: 'label-replace',
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-1',
              className: 'replace-before',
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              key: 'replace-2',
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check28',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '速報見出し'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'key2',
          className: 'label-replace',
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-1',
              className: 'replace-before',
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              key: 'replace-2',
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    /**/
    {
      template: '<div class="range-field"></div>',
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check29',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '速報'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'key2',
          className: 'label-replace',
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-1',
              className: 'replace-before',
            },
            {
              template: '',
              className: 'mx-1'
            },
            {
              key: 'replace-2',
              className: 'replace-after'
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check30',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '著作権'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check42',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check30',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-19',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check42',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-20',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check42',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check31',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '外部公開'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check32',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check31',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-21',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check32',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-22',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check32',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check33',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '字解'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check43',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check33',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-23',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check43',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-24',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check43',
              },
            }
          ]
        }
      ]
    },

    /**/
    {
      template: '<div class="range-field"></div>',
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check34',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '紙面発行本社'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check44',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check34',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-25',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check44',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-26',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check44',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check35',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '東京紙名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check45',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check35',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-27',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check45',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-28',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check45',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check36',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '東京面名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check46',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check36',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-29',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check46',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-30',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check46',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check37',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '東京面名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check47',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check37',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-31',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check47',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-32',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check47',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check38',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '大阪紙名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check48',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check38',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-34',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check48',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-34',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check48',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check39',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '大阪紙名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check49',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check39',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-35',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check49',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-36',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check49',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check40',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '大阪紙名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check50',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check40',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-37',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check50',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-38',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check50',
              },
            }
          ]
        }
      ]
    },

    {
      fieldGroupClassName: 'edit-item',
      // wrappers: ['nk-formly-wrapper-cols'],
      fieldGroup: [
        {
          key: 'check41',
          type: 'checkbox',
          className: 'label',
          templateOptions: {
            label: '大阪紙名'
          }
        },
        {
          template: 'AAAA',
          className: 'text'
        },
        {
          key: 'check51',
          className: 'label-replace',
          type: 'checkbox',
          templateOptions: {
            disabled: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.check41',
          },
        },
        {
          fieldGroupClassName: 'replace',
          fieldGroup: [
            {
              key: 'replace-39',
              type: 'input',
              className: 'replace-before',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check51',
              },
            },
            {
              template: '→',
              className: 'mx-1'
            },
            {
              key: 'replace-40',
              type: 'input',
              className: 'replace-after',
              templateOptions: {
                disabled: true
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.check51',
              },
            }
          ]
        }
      ]
    },

  ];
}
