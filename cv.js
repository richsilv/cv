module.exports = function ({
  name = '',
  tagline = '',
  address = [],
  summary = '',
  employmentHistory = [],
  personalProjects = [],
  education = [],
  profiles = [],
  width = '40em'
}) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name} CV</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <style>
      body {
        width: ${width};
      }
      .nbi {
        page-break-inside: avoid;
      }
      .nba {
        page-break-after: avoid;
      }
      .no-shadow {
        border-bottom: 1px solid transparent;
      }
    </style>
  </head>
  <body class="serif black-80">
    <h1 class="f1 fw6 mt1 mb2">${name}</h1>
    <h2 class="f4 fw2 ttu tracked mb4">${tagline}</h2>
    ${address.map((addressLine) => `<h3 class="f5 fw4 mt1 mb1 i">${addressLine}</h3>`).join('')}
    <div class="mt4 pb4 bt b--black-40 no-shadow"></div>
    <h2 class="f3 fw7 ttu tracked mt1 mb4">Summary</h2>
    <div class="f6 lh-copy">${summary}</div>
    <div class="mt4 pb4 bt b--black-40 no-shadow"></div>
    <h2 class="f3 fw7 ttu tracked mt1 mb4 nba">Employment History</h2>
    <ul class="list pl0">
      ${employmentHistory.map((job) => {
        return `<li class="mb4 nbi">
          <h4 class="f4 fw7 mt3 mb2">${job.employer}, <span class="fw4">${job.dates}</span></h4>
          <h5 class="f5 fw4 i mv2">${job.role}</h5>
          <p class="f6 lh-copy">${job.description}</p>
        </li>`
      }).join('')}
    </ul>
    <div class="mt4 pb4 bt b--black-40 no-shadow"></div>
    <h2 class="f3 fw7 ttu tracked mt1 mb4 nba">Education</h2>
    <ul class="list pl0">
      ${education.map((stage) => {
        return `<li class="mb3 lh-title nbi"><strong>${stage.details}</strong> - <em>${stage.name} (${stage.dates})</em></li>`
      }).join('')}    
    </ul>
    <div class="mt4 pb4 bt b--black-40 no-shadow"></div>
    <h2 class="f3 fw7 ttu tracked mt1 mb4 nba">Personal Projects</h2>
    <ul class="list pl0">
      ${personalProjects.map((project) => {
        return `<li class="nbi">
          <h4 class="f4 fw7">${project.name} <a class="black-40 f6 fw4 i" href="${project.link}">${project.link}</a></h3>
          <div class="lh-copy f6">${project.details}</div>
        </li>`
      }).join('')}
    </ul>
    <div class="mt4 pb4 bt b--black-40 no-shadow"></div>
    <h2 class="f3 fw7 ttu tracked mt1 mb4 nba">Profiles</h2>
    <ul class="list pl0 nbi">
      ${profiles.map(({ fa, network, link, username }) => {
        return `<li class="dib mr5">${fa ? `<i class="fa fa-${fa}"></i>` : ''} <strong>${network}</strong> - <a class="black-40 f6 i" href="${link}">${username}</a></li>`
      }).join('')}
    </ul>
  </body>
</html>  
`
}
