import { IgrActionStrip, IgrColumn, IgrColumnGroup, IgrGrid, IgrGridEditDoneEventArgsDetail, IgrGridEditingActions, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator, IgrRowDataEventArgsDetail } from 'igniteui-react-grids';
import { useState } from 'react';
import { deleteCustomerDto, postCustomerDto } from '../services/northwind-apiig';
import { useGetCustomerDtoPagedResultDto } from '../hooks/northwind-apiig-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './grid.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function Grid() {
  const classes = createClassTransformer(styles);
  const [basic_grid_1_Page_Size, setBasic_grid_1_Page_Size] = useState<number>(15);
  const [basic_grid_1_Page_Index, setBasic_grid_1_Page_Index] = useState<number>(0);
  const { northwindAPIIGCustomerDtoPagedResultDto: basicGrid1_Data_Request } = useGetCustomerDtoPagedResultDto(basic_grid_1_Page_Index, basic_grid_1_Page_Size);

  async function rowEditDoneBasicGrid1(e: CustomEvent<IgrGridEditDoneEventArgsDetail>) {
    if (!e.detail.isAddRow) {
      await postCustomerDto(e.detail.rowData);
    }
  }
  async function rowAddedBasicGrid1(e: CustomEvent<IgrRowDataEventArgsDetail>) {
    await postCustomerDto(e.detail.rowData);
  }
  async function rowDeletedBasicGrid1(e: CustomEvent<IgrRowDataEventArgsDetail>) {
    await deleteCustomerDto(e.detail.rowData?.customerId ?? '');
  }

  return (
    <>
      <div className={classes("column-layout grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrGrid data={basicGrid1_Data_Request?.items ?? undefined} primaryKey="customerId" rowSelection="multiple" columnSelection="single" rowEditable={true} pagingMode="remote" moving={true} allowFiltering={true} filterMode="excelStyleFilter" onRowEditDone={rowEditDoneBasicGrid1} onRowAdded={rowAddedBasicGrid1} onRowDeleted={rowDeletedBasicGrid1} className={classes("ig-typography ig-scrollbar basic-grid-1")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span>Excel style filtering</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrPaginator perPage={basic_grid_1_Page_Size} totalRecords={basicGrid1_Data_Request?.totalRecordsCount} page={basic_grid_1_Page_Index} onPageChange={(e) => setBasic_grid_1_Page_Index(e.detail)} onPerPageChange={(e) => setBasic_grid_1_Page_Size(e.detail)}></IgrPaginator>
            <IgrColumn field="customerId" dataType="string" header="customerId" editable={false} groupable={true} sortable={true} resizable={true}></IgrColumn>
            <IgrColumnGroup header="Contact info">
              <IgrColumn field="companyName" dataType="string" header="Company name" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="contactName" dataType="string" header="Contact" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="contactTitle" dataType="string" header="Contact title" groupable={true} sortable={true} resizable={true}></IgrColumn>
            </IgrColumnGroup>
            <IgrColumnGroup header="Address info">
              <IgrColumn field="address.street" dataType="string" header="Street" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="address.city" dataType="string" header="City" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="address.postalCode" dataType="string" header="Postal code" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="address.country" dataType="string" header="Country" groupable={true} sortable={true} resizable={true}></IgrColumn>
              <IgrColumn field="address.phone" dataType="string" header="Phone" groupable={true} sortable={true} resizable={true}></IgrColumn>
            </IgrColumnGroup>
            <IgrActionStrip>
              <IgrGridPinningActions></IgrGridPinningActions>
              <IgrGridEditingActions addRow={true}></IgrGridEditingActions>
            </IgrActionStrip>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
