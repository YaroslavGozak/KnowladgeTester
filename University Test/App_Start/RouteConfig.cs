using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace University_Test
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                // Set a constraint to only use this for routes identified as server-side routes
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    {
                        return !url.PathAndQuery.StartsWith("/app",
                            StringComparison.InvariantCultureIgnoreCase);
                    })
                });

            routes.MapRoute(
                name: "angular",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" } // The view that bootstraps Angular 2
            );
        }

        public class ServerRouteConstraint : IRouteConstraint
        {
            private readonly Func<Uri, bool> _predicate;

            public ServerRouteConstraint(Func<Uri, bool> predicate)
            {
                this._predicate = predicate;
            }

            public bool Match(HttpContextBase httpContext, Route route, string parameterName,
                RouteValueDictionary values, RouteDirection routeDirection)
            {
                return this._predicate(httpContext.Request.Url);
            }
        }
    }
}
