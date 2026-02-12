import { IgrAvatar, IgrIconButton, IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import { matchPath, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const location = decodeURIComponent(useLocation().pathname);
  const isActive = (pattern: string) => !!matchPath({path: pattern}, location);
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout main-navigation-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{ display: 'contents' }} slot="start" onClick={() => navDrawer?.current?.toggle()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>menu</span>
              </span>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")}>
            <h6 className={classes("h6")}>
              <span>App builder demos</span>
            </h6>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons")}>
                <span>search</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>favorite</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>more_vert</span>
              </span>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open={true} position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div slot="mini">
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>list_alt</span>
                  </span>
                </span>
              </IgrNavDrawerItem>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/dialogs-and-dropdowns`)}>
                <IgrNavDrawerItem active={isActive(`/dialogs-and-dropdowns`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>open_in_new</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>keyboard</span>
                  </span>
                </span>
              </IgrNavDrawerItem>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/position`)}>
                <IgrNavDrawerItem active={isActive(`/position`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>my_location</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>tab</span>
                  </span>
                </span>
              </IgrNavDrawerItem>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/card-calendar`)}>
                <IgrNavDrawerItem active={isActive(`/card-calendar`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>expand_more</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/pickers-combo`)}>
                <IgrNavDrawerItem active={isActive(`/pickers-combo`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>arrow_drop_down_circle</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/typescale-palettes`)}>
                <IgrNavDrawerItem active={isActive(`/typescale-palettes`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>text_fields</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/expansion-panels-tree`)}>
                <IgrNavDrawerItem active={isActive(`/expansion-panels-tree`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>account_circle</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/layouts`)}>
                <IgrNavDrawerItem active={isActive(`/layouts`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>view_quilt</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/inputs`)}>
                <IgrNavDrawerItem active={isActive(`/inputs`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>keyboard</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem>
                <span slot="icon">
                  <span className={classes("material-icons icon")}>
                    <span>remove_red_eye</span>
                  </span>
                </span>
              </IgrNavDrawerItem>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/grid`)}>
                <IgrNavDrawerItem active={isActive(`/grid`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>list_alt</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{ display: 'contents' }} onClick={() => navigate(`/expansion-panels-tree`)}>
                <IgrNavDrawerItem active={isActive(`/expansion-panels-tree`)}>
                  <span slot="icon">
                    <span className={classes("material-icons icon")}>
                      <span>account_circle</span>
                    </span>
                  </span>
                </IgrNavDrawerItem>
              </div>
            </div>
            <div className={classes("row-layout group_2")}>
              <IgrAvatar src="/src/assets/Avatar2.png" shape="rounded" className={classes("avatar")}></IgrAvatar>
              <div className={classes("column-layout group_3")}>
                <p className={classes("typography__subtitle-1 text")}>
                  <span>Welcome, Guest</span>
                </p>
                <a target="_blank" className={classes("typography__body-1 hyperlink")}>
                  <span>Edit profile</span>
                </a>
              </div>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Grids</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/grid`)}>
              <IgrNavDrawerItem active={isActive(`/grid`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>table_chart</span>
                  </span>
                </span>
                <div slot="content">Grid w/ remote paging</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/grid-with-templates`)}>
              <IgrNavDrawerItem active={isActive(`/grid-with-templates`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>account_circle</span>
                  </span>
                </span>
                <div slot="content">Grid with templates</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/tree-grid`)}>
              <IgrNavDrawerItem active={isActive(`/tree-grid`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>park</span>
                  </span>
                </span>
                <div slot="content">Tree grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/hierarchical-grid`)}>
              <IgrNavDrawerItem active={isActive(`/hierarchical-grid`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>account_tree</span>
                  </span>
                </span>
                <div slot="content">Hierarchical grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/master-detail-grid`)}>
              <IgrNavDrawerItem active={isActive(`/master-detail-grid`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>unfold_more</span>
                  </span>
                </span>
                <div slot="content">Master-detail grid</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/pivot-grid`)}>
              <IgrNavDrawerItem active={isActive(`/pivot-grid`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>pivot_table_chart</span>
                  </span>
                </span>
                <div slot="content">Pivot grid</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Inputs</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/inputs`)}>
              <IgrNavDrawerItem active={isActive(`/inputs`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>keyboard</span>
                  </span>
                </span>
                <div slot="content">Inputs + buttons</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/pickers-combo`)}>
              <IgrNavDrawerItem active={isActive(`/pickers-combo`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>arrow_drop_down_circle</span>
                  </span>
                </span>
                <div slot="content">Pickers</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Content</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/card-calendar`)}>
              <IgrNavDrawerItem active={isActive(`/card-calendar`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>calendar_today</span>
                  </span>
                </span>
                <div slot="content">Card-Calendar</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/lists-data`)}>
              <IgrNavDrawerItem active={isActive(`/lists-data`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>list</span>
                  </span>
                </span>
                <div slot="content">List + data</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/reveal`)}>
              <IgrNavDrawerItem active={isActive(`/reveal`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>dashboard</span>
                  </span>
                </span>
                <div slot="content">Reveal</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/category-charts`)}>
              <IgrNavDrawerItem active={isActive(`/category-charts`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>insert_chart_outlined</span>
                  </span>
                </span>
                <div slot="content">Category charts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/financial-chart`)}>
              <IgrNavDrawerItem active={isActive(`/financial-chart`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>waterfall_chart</span>
                  </span>
                </span>
                <div slot="content">Financial chart</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/apex-charts`)}>
              <IgrNavDrawerItem active={isActive(`/apex-charts`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>bubble_chart</span>
                  </span>
                </span>
                <div slot="content">Apex charts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/typescale-palettes`)}>
              <IgrNavDrawerItem active={isActive(`/typescale-palettes`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>palette</span>
                  </span>
                </span>
                <div slot="content">Typescale + palettes</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Layouts</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/expansion-panels-tree`)}>
              <IgrNavDrawerItem active={isActive(`/expansion-panels-tree`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>open_in_full</span>
                  </span>
                </span>
                <div slot="content">Expansion panels</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/stepper`)}>
              <IgrNavDrawerItem active={isActive(`/stepper`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>arrow_forward</span>
                  </span>
                </span>
                <div slot="content">Stepper</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/carousel`)}>
              <IgrNavDrawerItem active={isActive(`/carousel`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>collections</span>
                  </span>
                </span>
                <div slot="content">Carousel</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/tab-layout`)}>
              <IgrNavDrawerItem active={isActive(`/tab-layout`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>tab</span>
                  </span>
                </span>
                <div slot="content">Tab layout</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Notifications</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/dialogs-and-dropdowns`)}>
              <IgrNavDrawerItem active={isActive(`/dialogs-and-dropdowns`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>open_in_new</span>
                  </span>
                </span>
                <div slot="content">Dialogs and overlays</div>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerHeaderItem>
              <div>Misc</div>
            </IgrNavDrawerHeaderItem>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/image`)}>
              <IgrNavDrawerItem active={isActive(`/image`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>account_circle</span>
                  </span>
                </span>
                <div slot="content">Images</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/position`)}>
              <IgrNavDrawerItem active={isActive(`/position`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>my_location</span>
                  </span>
                </span>
                <div slot="content">Position</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/layouts`)}>
              <IgrNavDrawerItem active={isActive(`/layouts`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>view_quilt</span>
                  </span>
                </span>
                <div slot="content">Flex layouts</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => navigate(`/css-grid-layout`)}>
              <IgrNavDrawerItem active={isActive(`/css-grid-layout`)}>
                <span slot="icon">
                  <span className={classes("material-icons icon_1")}>
                    <span>grid_view</span>
                  </span>
                </span>
                <div slot="content">CSS grid</div>
              </IgrNavDrawerItem>
            </div>
            <div className={classes("column-layout group_4")}>
              <p className={classes("typography__body-2 text_1")}>
                <span>Last updated Sep 04, 2025</span>
              </p>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
