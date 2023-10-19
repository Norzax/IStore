#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS image_base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["website-builder/website-builder.csproj", "website-builder/"]
RUN dotnet restore "website-builder/website-builder.csproj"
COPY . .
WORKDIR "/src/website-builder"
RUN dotnet build "website-builder.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "website-builder.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM image_base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "website-builder.dll"]