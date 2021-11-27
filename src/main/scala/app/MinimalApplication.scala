package app
import scalatags.Text.all._
object MinimalApplication extends cask.MainRoutes{

  @cask.get("/")
  def main() = {
    html(
      head(
        meta(content := "text/html;charset=UTF-8"),
        link(
          rel := "stylesheet",
          media := "all",
          href := "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        ),
        link(
          rel := "stylesheet",
          href := "/css/stylesheet.css"
        ),
      ),
      body(
        div(
          id := "page"
        ),
        div( id := "print-button"),
        script(src :="https://unpkg.com/react@17/umd/react.development.js"),
        script(src :="https://unpkg.com/react-dom@17/umd/react-dom.development.js"),
        script(src :="/js/common/common.js"),
        script(src :="/js/common/TextInput.js"),
        script(src :="/js/common/TextArea.js"),
        script(src :="/js/common/List.js"),
        script(src :="/js/portfolio/header/PortfolioHeader.js"),
        script(src :="/js/portfolio/contact/PortfolioContact.js"),
        script(src :="/js/portfolio/skills/PortfolioSkills.js"),
        script(src :="/js/portfolio/work/PortfolioWork.js"),
        script(src :="/js/portfolio/education/PortfolioEducation.js"),
        script(src :="/js/portfolio/other/PortfolioOther.js"),
        script(src :="/js/page.js"),
        script(src :="/js/print.js")
      )
    )
  }

  @cask.staticFiles("/js")
  def componentFileRoutes() = "components"

  @cask.staticFiles("/css")
  def styleFileRoutes() = "styles"

  @cask.staticFiles("/static")
  def staticFileRoutes() = "static"

  initialize()
}