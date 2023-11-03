// Types
import type { provideExpanded } from './composables/expand'
import type { Group, GroupableItem, provideGroupBy } from './composables/group'
import type { provideSelection, SelectableItem } from './composables/select'
import type { FilterFunction, InternalItem } from '@/composables/filter'
import type { SelectItemKey } from '@/util'

export type DataTableCompareFunction<T = any> = (a: T, b: T) => number

export type DataTableHeader = {
  key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | (string & {})
  value?: SelectItemKey
  title?: string

  fixed?: boolean
  align?: 'start' | 'end' | 'center'

  width?: number | string
  minWidth?: string
  maxWidth?: string

  headerProps?: Record<string, any>
  cellProps?: HeaderCellProps

  sortable?: boolean
  sort?: DataTableCompareFunction
  filter?: FilterFunction

  children?: DataTableHeader[]
}

export type InternalDataTableHeader = Omit<DataTableHeader, 'key' | 'value' | 'children'> & {
  key: string | null
  value: SelectItemKey | null
  sortable: boolean
  fixedOffset?: number
  lastFixed?: boolean
  colspan?: number
  rowspan?: number
  children?: InternalDataTableHeader[]
}

export interface DataTableItem<T = any> extends InternalItem<T>, GroupableItem<T>, SelectableItem {
  key: any
  index: number
  columns: {
    [key: string]: any
  }
}

export type GroupHeaderSlot = {
  index: number
  item: Group
  columns: InternalDataTableHeader[]
  isExpanded: ReturnType<typeof provideExpanded>['isExpanded']
  toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand']
  isSelected: ReturnType<typeof provideSelection>['isSelected']
  toggleSelect: ReturnType<typeof provideSelection>['toggleSelect']
  toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup']
  isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen']
}

type ItemSlotBase<T = any> = {
  index: number
  item: T
  internalItem: DataTableItem<T>
  isExpanded: ReturnType<typeof provideExpanded>['isExpanded']
  toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand']
  isSelected: ReturnType<typeof provideSelection>['isSelected']
  toggleSelect: ReturnType<typeof provideSelection>['toggleSelect']
}

export type ItemSlot<T = any> = ItemSlotBase<T> & {
  columns: InternalDataTableHeader[]
}

export type ItemKeySlot<T = any> = ItemSlotBase<T> & {
  value: any
  column: InternalDataTableHeader
}

export type RowProps =
  | Record<string, any>
  | ((data: Pick<ItemKeySlot, 'index' | 'item' | 'internalItem'>) => Record<string, any>)

export type CellProps =
  | Record<string, any>
  | ((data: Pick<ItemKeySlot, 'index' | 'item' | 'internalItem' | 'value' | 'column'>) => Record<string, any>)

export type HeaderCellProps =
  | Record<string, any>
  | ((data: Pick<ItemKeySlot, 'index' | 'item' | 'internalItem' | 'value'>) => Record<string, any>)
