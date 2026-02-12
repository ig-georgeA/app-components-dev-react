import styles from './typescale-palettes.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function TypescalePalettes() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout typescale-palettes-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 content")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption content")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content_1")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content_1")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content_1")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content_1")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content_1")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content_1")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content_1")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content_1")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 text")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 text")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline text")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content_2")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content_2")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content_2")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content_2")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content_2")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content_2")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content_2")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content_2")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 text_1")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption text_1")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline text_1")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes("row-layout group_4")}>
            <div className={classes("column-layout group_5")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Primary</span>
              </p>
              <div className={classes("column-layout group_6")}>
                <div className={classes("row-layout group_7")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>Primary -50</span>
                  </p>
                </div>
                <div className={classes("row-layout group_8")}></div>
                <div className={classes("row-layout group_9")}></div>
                <div className={classes("row-layout group_10")}></div>
                <div className={classes("row-layout group_11")}></div>
                <div className={classes("row-layout group_12")}>
                  <p className={classes("typography__subtitle-2 text_4")}>
                    <span>Primary -500</span>
                  </p>
                </div>
                <div className={classes("row-layout group_13")}></div>
                <div className={classes("row-layout group_14")}></div>
                <div className={classes("row-layout group_15")}></div>
                <div className={classes("row-layout group_16")}>
                  <p className={classes("typography__subtitle-2 text_5")}>
                    <span>Primary -900</span>
                  </p>
                </div>
              </div>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Grays</span>
              </p>
              <div className={classes("column-layout group_6")}>
                <div className={classes("row-layout group_17")}>
                  <p className={classes("typography__subtitle-2 text_6")}>
                    <span>Gray -50</span>
                  </p>
                </div>
                <div className={classes("row-layout group_18")}></div>
                <div className={classes("row-layout group_19")}></div>
                <div className={classes("row-layout group_20")}></div>
                <div className={classes("row-layout group_21")}></div>
                <div className={classes("row-layout group_22")}>
                  <p className={classes("typography__subtitle-2 text_7")}>
                    <span>Gray -500</span>
                  </p>
                </div>
                <div className={classes("row-layout group_23")}></div>
                <div className={classes("row-layout group_24")}></div>
                <div className={classes("row-layout group_25")}></div>
                <div className={classes("row-layout group_26")}>
                  <p className={classes("typography__subtitle-2 text_8")}>
                    <span>Gray -900</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes("column-layout group_5")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Secondary</span>
              </p>
              <div className={classes("column-layout group_6")}>
                <div className={classes("row-layout group_27")}>
                  <p className={classes("typography__subtitle-2 text_9")}>
                    <span>Secondary-50</span>
                  </p>
                </div>
                <div className={classes("row-layout group_28")}></div>
                <div className={classes("row-layout group_29")}></div>
                <div className={classes("row-layout group_30")}></div>
                <div className={classes("row-layout group_31")}></div>
                <div className={classes("row-layout group_32")}>
                  <p className={classes("typography__subtitle-2 text_4")}>
                    <span>Secondary -500</span>
                  </p>
                </div>
                <div className={classes("row-layout group_33")}></div>
                <div className={classes("row-layout group_34")}></div>
                <div className={classes("row-layout group_34")}></div>
                <div className={classes("row-layout group_35")}>
                  <p className={classes("typography__subtitle-2 text_10")}>
                    <span>Primary -900</span>
                  </p>
                </div>
              </div>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Special colors</span>
              </p>
              <div className={classes("column-layout group_36")}>
                <div className={classes("row-layout group_37")}></div>
                <div className={classes("row-layout group_38")}></div>
                <div className={classes("row-layout group_39")}></div>
                <div className={classes("row-layout group_40")}></div>
                <div className={classes("row-layout group_41")}></div>
              </div>
            </div>
            <div className={classes("column-layout group_5")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Surface</span>
              </p>
              <div className={classes("column-layout group_6")}>
                <div className={classes("row-layout group_42")}>
                  <p className={classes("typography__subtitle-2 text_11")}>
                    <span>Surface-50</span>
                  </p>
                </div>
                <div className={classes("row-layout group_43")}></div>
                <div className={classes("row-layout group_44")}></div>
                <div className={classes("row-layout group_45")}></div>
                <div className={classes("row-layout group_46")}></div>
                <div className={classes("row-layout group_47")}>
                  <p className={classes("typography__subtitle-2 text_12")}>
                    <span>Surface-500</span>
                  </p>
                </div>
                <div className={classes("row-layout group_48")}></div>
                <div className={classes("row-layout group_49")}></div>
                <div className={classes("row-layout group_50")}></div>
                <div className={classes("row-layout group_51")}>
                  <p className={classes("typography__subtitle-2 text_5")}>
                    <span>Surface-900</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
