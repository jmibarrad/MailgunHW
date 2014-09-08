using System.Net;
using System.Web;
using System.Web.Http;
using AcklenAvenue.Data.NHibernate;
using AttributeRouting.Web.Mvc;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using PrediLiga.Data;
using PrediLiga.Domain.Entities;
using PrediLiga.domain.Entities;
using PrediLiga.Domain.Services;
using PregiLiga.Api.Models;
using RestSharp;

namespace PregiLiga.Api.Controllers
{
    public class LoginController:ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;


        public LoginController(IReadOnlyRepository readOnlyRepository )
        {
            
            _readOnlyRepository = readOnlyRepository;
        }

        [HttpPost]
        [AcceptVerbs("POST","HEAD")]
        [POST("login")]
        public AuthModel Login([FromBody] AccountLoginModel model)
        {
            var resp = SendSimpleMessage(model.Email);
            var user = _readOnlyRepository.FirstOrDefault<Account>(x => x.Email == model.Email);
            if (user == null) throw new HttpException((int) HttpStatusCode.NotFound, "User doesn't exist.");
            if (!user.CheckPassword(model.Password))
                throw new HttpException((int) HttpStatusCode.Unauthorized, "Password doesn't match.");
            var authModel = new AuthModel {Token = "SuperHash"};
            return authModel;
        }

        public static IRestResponse SendSimpleMessage(string destination)
        {
            var client = new RestClient
            {
                BaseUrl = "https://api.mailgun.net/v2",
                Authenticator = new HttpBasicAuthenticator("api",
                    "key-8tw489mxfegaqewx93in2xo449q5p3l0")
            };
            var request = new RestRequest();
            request.AddParameter("domain",
                                "app5dcaf6d377cc4ddcb696b827eabcb975.mailgun.org", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "Nostradamus-Support <postmaster@app5dcaf6d377cc4ddcb696b827eabcb975.mailgun.org>");
            string email = "<" + destination + ">";
            request.AddParameter("to", email);
            request.AddParameter("subject", "Welcome to Nostradamus|App");
            request.AddParameter("text", "Get Started with our new brand leagues prediction.");
            request.Method = Method.POST;
            return client.Execute(request);
        }

    }
}