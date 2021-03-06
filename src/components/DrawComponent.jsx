﻿import React from 'react';
//import AutoBind from 'react-autobind';
import DrawAssosiation from './DrawAssociation.jsx';



class DrawComponent extends React.Component {
    constructor(props) {


        super(props);
       // AutoBind(this);

        this.state = {
            models: []

        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ models: nextProps.association.BuildDiagram.listModels });

       
    }
     



    render() {

        
        //if (this.props.association.BuildDiagram) {
          const pListModel = this.props.association.BuildDiagram.listModels;
        //}
         
        /*const useTag = `<svg id="lmDiagramSvg"  width="550" height="300"></svg>`;*/
        //const Model = React.createClass({ esto esta obsoleto, desaparece en la version  16 
        class Model extends React.Component {
        
            render() {
                return (
                    <svg className="canvas" id="lmDiagramSvg" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} aria-labelledby={this.props.iconTitle} >
                    </svg >
                )
            }
        };
    

        return (


            <div>

                <div>
                    <div>

                        {

                            pListModel.map((model, i) => {

                                return (
                                    <div className="flowchart-operator zlmModel flowchart-default-operator ui-draggable card-4" style={{ top: model.top, bottom: model.bottom, left: model.left, right: model.right, width: model.width, height: 102 }} key={i} id={model.Id}>{/*className='zlmModel'*/}

                                        <div className="flowchart-operator-title ui-draggable-handle">{model.header} </div>
                                        <div className="flowchart-operator-inputs-outputs">
                                            <div className="flowchart-operator-inputs"></div>
                                            <div className="flowchart-operator-outputs">
                                                <div className="flowchart-operator-connector">
                                                    <div className="flowchart-operator-connector-label">{model.body}</div>
                                                    <div className="flowchart-operator-connector-arrow"></div>
                                                    <div className="flowchart-operator-connector-small-arrow" style={{ borderLeftColor: ' rgb(51, 102, 255)' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                );

                            })
                        }

                    </div>

                </div>
                {/*<div dangerouslySetInnerHTML={{ __html: useTag }} />*/}
                <div >
                    <Model iconTitle="animatedOffice" width='100%' height='350' />
                </div>
                <DrawAssosiation AssociationModel={this.props.association.BuildDiagram} />

            </div>
        );

        
    }
}

export default DrawComponent;

