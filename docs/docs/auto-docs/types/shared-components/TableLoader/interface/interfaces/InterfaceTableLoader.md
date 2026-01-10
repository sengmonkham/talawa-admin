[Admin Docs](/)

***

# Interface: InterfaceTableLoader

Defined in: [src/types/shared-components/TableLoader/interface.ts:4](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/shared-components/TableLoader/interface.ts#L4)

Interface for TableLoader props.

## Properties

### data-testid?

> `optional` **data-testid**: `string`

Defined in: [src/types/shared-components/TableLoader/interface.ts:18](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/shared-components/TableLoader/interface.ts#L18)

A custom `data-testid` attribute for testing purposes.

***

### headerTitles?

> `optional` **headerTitles**: `string`[]

Defined in: [src/types/shared-components/TableLoader/interface.ts:11](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/shared-components/TableLoader/interface.ts#L11)

An array of strings representing the titles for the table headers.
If provided, the number of columns will be determined by the length of this array.

***

### noOfCols?

> `optional` **noOfCols**: `number`

Defined in: [src/types/shared-components/TableLoader/interface.ts:16](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/shared-components/TableLoader/interface.ts#L16)

The number of columns to render in the table.
This is required if `headerTitles` is not provided.

***

### noOfRows

> **noOfRows**: `number`

Defined in: [src/types/shared-components/TableLoader/interface.ts:6](https://github.com/PalisadoesFoundation/talawa-admin/blob/main/src/types/shared-components/TableLoader/interface.ts#L6)

The number of rows to render in the table body.
