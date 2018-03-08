import React,{Component} from 'react';
class ActualiteItem extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div className="items-row cols-1 row-1 row">
        <div className="col-sm-12">
          <div className="item column-1">
            {/* Article */}
            <article>
              <header className="article-header clearfix">
                <h2 className="article-title" itemProp="headline">
                {this.props.titre}
                </h2>
              </header>
              {/* Aside */}
              {/* //Aside */}
              <section className="article-intro clearfix">
                <p style={{textAlign: 'justify'}}>
                  <strong>
                    <img src="/images/Vente-Balisix---26-novembre-2016---Sylvain-87.jpg" alt="Vente Balisix 26 novembre 2016 Sylvain 87" style={{marginRight: 5, float: 'left'}} width={400} height={267} />
                    {this.props.description}
                  </strong>
                </p>
                <p style={{textAlign: 'justify'}}>Participez aux <strong>premières ventes</strong> organisées par LJE !</p>
                <p style={{textAlign: 'justify'}}><strong>Quand ?<br /></strong>{this.props.date_debut}</p>
                <p style={{textAlign: 'justify'}}><strong>Où </strong><br/>{this.props.lieu} </p>
              </section>
              {/* footer */}
              {/* //footer */}
              <section className="readmore">
                <a className="btn btn-default" href="/index.php/fr/nos-programmes/mini-entreprise/actualite-des-mini-entreprises/571-journee-de-vente-des-mini-entreprises-basilix-shopping-center-bruxelles-25-novembre-2017">
                  <span>
                    Lire la suite...					</span>
                </a>
              </section>
            </article>
            {/* //Article */}
          </div>{/* end item */}
        </div>{/* end span */}
      {/* end row */}</div>
    )
  }
}
export default ActualiteItem ;
