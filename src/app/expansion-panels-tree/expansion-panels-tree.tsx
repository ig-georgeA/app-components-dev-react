import { IgrAccordion, IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardHeader, IgrCheckbox, IgrExpansionPanel, IgrInput, IgrList, IgrListItem, IgrTree, IgrTreeItem } from 'igniteui-react';
import { useState } from 'react';
import { useGetNestedData } from '../hooks/nested-data-repeat-hooks';
import styles from './expansion-panels-tree.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ExpansionPanelsTree() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [listSelectedItem4, setListSelectedItem4] = useState<string | undefined>();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [checked, setChecked] = useState<boolean>(false);
  const { nestedDataRepeatNestedData } = useGetNestedData();

  return (
    <>
      <div className={classes("row-layout expansion-panels-tree-container")}>
        <div className={classes("column-layout group")}>
          <IgrCard className={classes("card")}>
            <IgrCardHeader>
              <div slot="thumbnail">
                <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar")}></IgrAvatar>
              </div>
              <h3 slot="title">
                <span>FirstName LastName</span>
              </h3>
              <h5 slot="subtitle">
                <span>myemail@email.com</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")}>
              <div slot="end">
                <IgrButton variant="flat" type="button" className={classes("button")}>
                  <span className={classes("material-icons")}>
                    <span>exit_to_app</span>
                  </span>
                  <span>Sign out</span>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrAccordion singleExpand={true} className={classes("accordion")}>
            <IgrExpansionPanel open={true} indicatorPosition="end">
              <IgrList className={classes("list")}>
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem4('0')}>
                  <IgrListItem selected={listSelectedItem4 != null && listSelectedItem4 === '0'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("avatar_1")}>
                        <span className={classes("material-icons")}>
                          <span>person</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">User profile</div>
                  </IgrListItem>
                </div>
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem4('1')}>
                  <IgrListItem selected={listSelectedItem4 != null && listSelectedItem4 === '1'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("avatar_1")}>
                        <span className={classes("material-icons")}>
                          <span>assessment</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Analytics</div>
                  </IgrListItem>
                </div>
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem4('2')}>
                  <IgrListItem selected={listSelectedItem4 != null && listSelectedItem4 === '2'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("avatar_1")}>
                        <span className={classes("material-icons")}>
                          <span>book</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Favorites</div>
                  </IgrListItem>
                </div>
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem4('3')}>
                  <IgrListItem selected={listSelectedItem4 != null && listSelectedItem4 === '3'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("avatar_1")}>
                        <span className={classes("material-icons")}>
                          <span>people</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Shared with others</div>
                  </IgrListItem>
                </div>
              </IgrList>
              <span slot="title">Account</span>
            </IgrExpansionPanel>
            <IgrExpansionPanel indicatorPosition="end">
              <img src="/src/assets/SketchParser.png" alt="" className={classes("image")} />
              <span slot="title">Preferences</span>
            </IgrExpansionPanel>
            <IgrExpansionPanel indicatorPosition="end">
              <p className={classes("typography__body-2 text")}>
                <span>Expanded Panel - The body was generated in an additional frame that doubles the horizontal and vertical padding.</span>
              </p>
              <span slot="title">Text content</span>
            </IgrExpansionPanel>
          </IgrAccordion>
        </div>
        <div className={classes("row-layout row-layout-1")}>
          <div className={classes("column-layout column-layout-1")}>
            <h5 className={classes("title-1")}>
              <span>Sign in</span>
            </h5>
            <IgrInput value={value} label="Username" outlined={false} onChange={(e) => setValue(e.detail)} className={classes("input-group-1")}></IgrInput>
            <IgrInput type="password" value={value1} label="Password" outlined={false} onChange={(e) => setValue1(e.detail)} className={classes("input-group-1_1")}></IgrInput>
            <div className={classes("row-layout row-layout-2")}>
              <IgrCheckbox labelPosition="after" checked={checked} onChange={(e) => setChecked(!!e.detail.checked)} className={classes("checkbox-1")}>
                <span>Remember me</span>
              </IgrCheckbox>
              <a target="_blank" className={classes("typography__body-1 hyperlink")}>
                <span>Forgot password?</span>
              </a>
            </div>
            <IgrButton type="button" className={classes("button-1")}>
              <span>Sign in</span>
            </IgrButton>
            <IgrButton variant="outlined" type="button" className={classes("button-1_1")}>
              <span>Create a new account</span>
            </IgrButton>
            <p className={classes("typography__caption text-2")}>
              <span>By signing in, you are agreeing to our terms of use and privacy policy</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("column-layout group_2")}>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__body-1 text_1")}>
                <span>Data bound tree</span>
              </p>
            </div>
            <IgrTree selection="none" className={classes("tree")}>
              {nestedDataRepeatNestedData?.components?.map((item) => (
                <IgrTreeItem label={item.name} key={uuid()}>
                  {item.propertiesPanel?.map((item1) => (
                    <IgrTreeItem label={item1.name} key={uuid()}>
                      {item1.content?.map((item2) => (
                        <IgrTreeItem label={item2.name} expanded={true} key={uuid()}></IgrTreeItem>
                      ))}
                    </IgrTreeItem>
                  ))}
                </IgrTreeItem>
              ))}
            </IgrTree>
          </div>
          <div className={classes("column-layout group_4")}>
            <div className={classes("row-layout group_5")}>
              <p className={classes("typography__body-1 text_1")}>
                <span>Static tree</span>
              </p>
            </div>
            <IgrTree selection="none" className={classes("tree_1")}>
              <IgrTreeItem label="Design">
                <IgrTreeItem label="Figma" expanded={true}></IgrTreeItem>
                <IgrTreeItem label="Adobe XD" expanded={true}></IgrTreeItem>
                <IgrTreeItem label="Sketch" expanded={true}></IgrTreeItem>
              </IgrTreeItem>
              <IgrTreeItem label="Development">
                <IgrTreeItem label="Angular" expanded={true}></IgrTreeItem>
                <IgrTreeItem label="Blazor" expanded={true}></IgrTreeItem>
                <IgrTreeItem label="Web components" expanded={true}></IgrTreeItem>
              </IgrTreeItem>
            </IgrTree>
          </div>
        </div>
      </div>
    </>
  );
}
